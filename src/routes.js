import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

const routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default routes;