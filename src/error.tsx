import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { parse } from 'query-string'
import { AppContainer } from 'react-hot-loader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

import Error from './components/Error';

import './styles.less';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';

initializeIcons();

const title = 'Error';

const render = (Component) => {
    let error = "Unknown error";
    try {
        const values = parse(window.location.search);
        if (values['error']) {
           error = values["error"].toString();
        }
    } catch (e) {
        error = JSON.stringify(e);
    }

    ReactDOM.render(
        <AppContainer>
            <Component title={title} error={error}/>
        </AppContainer>,
        document.getElementById('container')
    );
};

render(Error);

if ((module as any).hot) {
    (module as any).hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(NextApp);
    });
}
