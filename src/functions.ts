/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import * as highlighter from "./utils/highlighter";
//import * as styles from "./utils/styles";
import {ROOT_URL} from "./globals";

(() => {
  // The initialize function must be run each time a new page is loaded
  Office.initialize = () => {
  };
})();


const _global = (window /* browser */ || global /* node */) as any
_global.highlightSelection = highlightSelectionSafe;

/*
 * Safe version of highlightSelection to be called from the ribbon bar.
 * Any errors are reported to the user in a pop-up dialog.
 */
async function highlightSelectionSafe(event) {
    try {
        await Word.run(async context => {
            await highlightSelection(context);
        });
    }
    catch (e) {
        let err = encodeURI(e.toString());
        await Office.context.ui.displayDialogAsync(ROOT_URL + '/error.html?error=' + err, {
            height: 30,
            width: 30,
            displayInIframe: true
        });
    }

    event.completed(true)
}

/*
 * Inserts syntax highlighted text.
 * Uses the current document settings for language and theme selection etc.
 */
export async function insertHighlightedText(context, text: string) {
    // Get the settings
    let settings = Office.context.document.settings;
    let language = settings.get("language") || "Auto Detect";
    let theme = settings.get("theme") || "Default";

    // Highlight as html
    let html = highlighter.highlight(language, theme, text, null);

    // Write back to Word
    let thisDocument = context.document;
    let range = thisDocument.getSelection();
    let newRange = range.insertHtml(html, Word.InsertLocation.replace);
    newRange.select(Word.SelectionMode.end);
    await context.sync();

    // Trim the final char (which is there to make sure the last line ending works)
    let spaces = newRange.search(' ', {ignoreSpace: false});
    context.load(spaces);
    await context.sync();

    if (spaces.items && spaces.items.length > 0) {
        let lastSpace = spaces.items[spaces.items.length-1];
        if (lastSpace) {
            lastSpace.delete();
        }
    }

    await context.sync();
}

/*
 * Applies syntax highlighting to the current selection.
 * Uses the current document settings for language and theme selection etc.
 */
export async function highlightSelection(context) {
    // Queue a command to get the current selection.
    let thisDocument = context.document;
    let range = thisDocument.getSelection().getRange(Word.RangeLocation.content);

    // Load the content of the range and highlight it
    context.load(range, ['text']);
    await context.sync();

    let text = range.text;
    if (!text) {
        throw new Error("No text selected");
    }

    // Replace the current selection with the highlighted text
    await insertHighlightedText(context, text.trim());
}
