import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Markdown from 'react-markdown';
import { AppContainer } from 'react-hot-loader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import Header from './components/Header';

import './styles.less';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';

initializeIcons();

const title = 'Word Syntax Highlighter';

const about = `
## About

Syntax Highlighting for Microsoft Word.

- 185 languages and 89 styles
- Automatic language detection
- Multi-language code highlighting

The Syntax Highlighter add-in uses [highlight.js](https://highlightjs.org) for code formatting.

See the [highlight.js demos](https://highlightjs.org/static/demo/) for a full list of languages
and styles.

## Usage

The add-in adds a new tab 'Syntax Highlighter' to the Word ribbon.

Select the code you want highlighted in your Word document and press the 'Highlight Selection' button
to apply syntax highlighting.

Note that only the font color, weight and style are updated. You can change the font and spacing
using the normal Word font and paragraph settings. 

To change the theme, go to the settings menu, accessed via the settings button in the 'Syntax Highlighter'
tab of the ribbon.

If the language you are using is not automatically recognized, change it from the settings menu.

Some themes specify the text background color of the text. If you want this background color to be
set from the theme, check the 'Color Background' option in the syntax highlighter settings. Usually if you want
to set the background color, you will want to add your text to a text box.

## Software Disclaimer

The Syntax Highlighter add-in is provided "as is" without warranty of any kind. Use at your own risk.

The use of the software is done at your own discretion and risk and with
agreement that you will be solely responsible for any damage to your
computer system / damage to your document or loss of data that results
from such activities.

You are solely responsible for adequate protection
and backup of the data and equipment used in connection with any of
the software, and we will not be liable for any damages that you may
suffer in connection with using this software. No advice or information,
whether oral or written, obtained by you from us or from this website
shall create any warranty for the software.
We make no warranty that

- The software will meet your requirements
- The software will be uninterrupted, timely, secure or error-free
- The results that may be obtained from the use of the software will be effective, accurate or reliable
- The quality of the software will meet your expectations
- Any errors in the software obtained from us will be corrected.

In no event shall we be liable to you or any third parties for any special, punitive, incidental,
indirect or consequential damages of any kind, or any damages whatsoever, including, without limitation,
those resulting from loss of use, data or profits, and on any theory of liability, arising out of
or in connection with the use of this software.

## Support

For getting in touch regarding a bug or further queries, please
use the *email developer* button. If this feature is not working, please email
<mailto:support@pyxll.com>.

## Copyright

Copyright PyXLL Ltd, 2019. All rights reserved.
`;

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <div className="ms-fontColor-neutralPrimary">
                <Header message={title} />
                <div className="markdown">
                    <Markdown source={about} />
                </div>
            </div>
        </AppContainer>,
        document.getElementById('container')
    );
};

render();
