import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';

import '@project/ui/lib/index.css';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    window.document.getElementById('root'),
);
