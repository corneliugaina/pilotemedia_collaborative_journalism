import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/index.css';

import * as serviceWorker from './serviceWorker';
// import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import routes from "./utils/router/routes"

const initRoutes = () => (
    <Router>
        <div>
            {routes}
        </div>
    </Router>
);

const initializedRoutes = initRoutes();
ReactDOM.render(
    initializedRoutes, 
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
