/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import * as highlighter from "./utils/highlighter";
import * as styles from "./utils/styles";
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
 * Applies syntax highlighting to the current selection.
 * Uses the current document settings for language and theme selection etc.
 */
export async function highlightSelection(context) {
    let toWordColor = (c) => {
        c = c.toUpperCase();
        if (c.length == 4) {
            c = c[0] + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
        }
        return c;
    };

    // Create a proxy object for the document.
    let thisDocument = context.document;

    // Get the settings
    let settings = Office.context.document.settings;
    let language = settings.get("language") || "Auto Detect";
    let theme = settings.get("theme") || "Default";
    let setHighlightColor = settings.get("setHighlightColor") || false;

    // Queue a command to get the current selection.
    // Create a proxy range object for the selection.
    let range = thisDocument.getSelection().getRange(Word.RangeLocation.content);

    // Load the content of the range and highlight it
    context.load(range, ['text', 'font']);
    await context.sync();

    let text = range.text;
    if (!text) {
        throw new Error("No text selected");
    }

    // Add the new content at the start of the range to preserve formatting
    let rangeToClear = range;
    range = range.getRange(Word.RangeLocation.start);

    let defaultFont = range.font;
    context.load(defaultFont);
    await context.sync();

    highlighter.highlight(language, text, (cls, text) => {
        let newRange = range.insertText(text, Word.InsertLocation.end);

        newRange.font.color = defaultFont.color;
        newRange.font.bold = false;
        newRange.font.italic = false;

        if (setHighlightColor) {
            newRange.font.highlightColor = defaultFont.highlightColor;
        }

        let style = styles.getStyle(theme, cls);

        if (style) {
            if (style['color'] && style['color'][0] == '#') {
                newRange.font.color = toWordColor(style['color']);
            }

            if (style['font-weight'] && style['font-weight'] == 'bold') {
                newRange.font.bold = true;
            }

            if (style['font-style'] && style['font-style'] == 'italic') {
                newRange.font.italic = true;
            }

            if (setHighlightColor && style['background'] && style['background'][0] == '#') {
                newRange.font.highlightColor = toWordColor(style['background']);
            }
        }
    });

    // Once the new content is written, clear the old range
    rangeToClear.clear();
    await context.sync();
}
