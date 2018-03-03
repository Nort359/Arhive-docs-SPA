import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartPage from './pages/StartPage';
import Authorization from './pages/Authorization';

export const paths = {
    startPage: StartPage.path,
    authorization: Authorization.path
};

export const routes = (
        <Switch>
            <Route exact component={ StartPage } path={ StartPage.path } />
            <Route exact component={ Authorization } path={ Authorization.path } />
        </Switch>
);
