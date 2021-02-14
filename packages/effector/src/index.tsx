import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    window.document.getElementById('root'),
);
