import React from 'react';
import { Route } from 'react-router';
import {Switch} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Oops from '../Oops';

const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={Oops} />
        </Switch>
    );
}

export default SwitchedRoutes;