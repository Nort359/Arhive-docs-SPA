import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartPage from './pages/StartPage';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';

export const paths = {
    startPage: StartPage.path,
    authorization: Authorization.path,
    registration: Registration.path
};

export const routes = (
        <Switch>
            <Route exact component={ StartPage } path={ StartPage.path } />
            <Route component={ Authorization } path={ Authorization.path } />
            <Route component={ Registration } path={ Registration.path } />
        </Switch>
);
