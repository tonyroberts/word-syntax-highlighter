import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import Header from './components/Header';
import { Video } from './components/Video';

import './styles.less';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';

initializeIcons();

const title = 'Easy Syntax Highlighter';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <div className="ms-fontColor-neutralPrimary">
                <Header message={title} />
                <div className='video'>
                    <Video />
                </div>
            </div>
        </AppContainer>,
        document.getElementById('container')
    );
};

render();
