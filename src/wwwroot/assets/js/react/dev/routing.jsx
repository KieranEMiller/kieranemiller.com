import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from          './header.jsx';
import Index from           './paths/index.jsx';
import About from           './paths/about.jsx';
import { Routes } from      './constants.jsx';

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={Routes.DEFAULT} component={Index} />
                    <Route exact path={Routes.INDEX} component={Index} />
                    <Route component={Index} />
                </Switch>
            </div>
        );
    }
}

export default Routing;