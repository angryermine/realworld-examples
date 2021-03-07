import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {fork, hydrate} from 'effector/fork';

import {root} from 'effector-root';
import {App} from './app';

import '@project/ui/lib/index.css';

hydrate(root, {values: INITIAL_STATE});

const scope = fork(root);

ReactDOM.hydrate(
    <BrowserRouter>
        <App root={scope} />
    </BrowserRouter>,
    document.querySelector('#root'),
);

if (module.hot) {
    module.hot.accept();
}
