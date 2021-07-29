import React from 'react';
import { Route } from 'react-router';
import Home from '../Home';
import About from '../About';

const RouterRoutes = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </>
    );
}

export default RouterRoutes;