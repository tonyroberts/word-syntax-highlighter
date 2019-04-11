/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
import * as highlighter from "./utils/highlighter";
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
    let language = settings.get("language") || "Detect Automatically";
    let theme = settings.get("theme") || "Default";

    // Highlight as OOXML
    let xml = highlighter.highlightOoxml(language, theme, text);
    console.log(xml);

    // Replace the current selection in Word
    let thisDocument = context.document;
    let range = thisDocument.getSelection().getRange(Word.RangeLocation.content) as Word.Range;

    range.styleBuiltIn = 'Normal';
    range.insertOoxml(xml, Word.InsertLocation.replace);

    await context.sync();
}

/*
 * Applies syntax highlighting to the current selection.
 * Uses the current document settings for language and theme selection etc.
 */
export async function highlightSelection(context) {
    // Queue a command to get the current selection.
    let thisDocument = context.document;

    let range = thisDocument.getSelection().getRange(Word.RangeLocation.content) as Word.Range;

    // Using Range.text doesn't work in online versions of Office as the line endings are lost.
    let ranges = range.getTextRanges(['\r'], false);

    context.load(ranges);
    await context.sync();

    let text = ranges.items.reduce((acc, r) => { return acc + r.text; }, '');
    if (!text.trim()) {
        throw new Error("No text selected");
    }

    // Replace the current selection with the highlighted text
    await insertHighlightedText(context, text);
}
