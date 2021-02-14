import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@project/ui/lib/ui.min.css';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    window.document.getElementById('root'),
);
