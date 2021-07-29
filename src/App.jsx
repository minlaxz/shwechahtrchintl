import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterRoutes from "./routes";

const App = () => {
    return (
        <Router>
            <RouterRoutes />
        </Router>
    );
}

export default App;