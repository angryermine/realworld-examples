import 'reflect-metadata';
import {
    ComponentLifecycleService,
    OperationService,
    asyncOperationsReducer,
    Root,
    useOperation,
} from '@iiiristram/sagun';
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {call} from 'typed-redux-saga';

import {App} from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@project/ui/lib/ui.min.css';

const sagaMiddleware = createSagaMiddleware();
const store = applyMiddleware(sagaMiddleware)(createStore)(
    combineReducers({
        asyncOperations: asyncOperationsReducer,
    }),
);

useOperation.setPath((state) => state.asyncOperations);

const operationService = new OperationService();
const componentLifecycleService = new ComponentLifecycleService(operationService);

sagaMiddleware.run(function* () {
    yield* call(operationService.run);
    yield* call(componentLifecycleService.run);
});

ReactDOM.render(
    <StrictMode>
        <Root operationService={operationService} componentLifecycleService={componentLifecycleService}>
            <Provider store={store}>
                <App />
            </Provider>
        </Root>
    </StrictMode>,
    window.document.getElementById('root'),
);
