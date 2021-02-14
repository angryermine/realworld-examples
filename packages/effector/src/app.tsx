import React, {lazy, Suspense} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const ArticlesPage = lazy(() => import(/* webpackChunkName: "articles" */ './pages/articles'));

export function App() {
    return (
        <Router history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" render={() => <ArticlesPage />} exact />
                </Switch>
            </Suspense>
        </Router>
    );
}
