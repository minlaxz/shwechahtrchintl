import React from 'react';
import { HashRouter } from "react-router-dom";
import SwitchedRoutes from './routes';

const App = () => {
    return (
        <HashRouter basename='project/'>
            <SwitchedRoutes />
        </HashRouter>
    );
}

export default App;