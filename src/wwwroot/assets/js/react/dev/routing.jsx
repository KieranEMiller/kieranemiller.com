import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from          './header.jsx';
import Index from           './paths/index.jsx';
import Contact from         './paths/contact.jsx';
import Projects from        './paths/projects.jsx';
import { Routes } from      './constants.jsx';

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={Routes.DEFAULT} component={Index} />
                    <Route exact path={Routes.INDEX} component={Index} />
                    <Route exact path={Routes.PROJECTS} component={Projects} />
                    <Route exact path={Routes.CONTACT} component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default Routing;