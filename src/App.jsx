import React from 'react';
import { HashRouter as Router, Switch } from "react-router-dom";
import RouterRoutes from "./routes";

const App = () => {
    return (
        <Router basename='/'>
            <Switch>
                <RouterRoutes />
            </Switch>
        </Router>
    );
}

export default App;