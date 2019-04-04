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

const title = 'Easy Syntax Highlighter';

const about = `

## Privacy Policy

We do not store or process your data in any way.

The Easy Syntax Highlighter add-in for Word does not collect or send any data.

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
