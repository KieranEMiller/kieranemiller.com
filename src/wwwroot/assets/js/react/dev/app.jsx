import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Routing from         './routing.jsx';
import Header from          './header.jsx';
import Footer from          './footer.jsx';

import '../../../../assets/css/master.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Header />
                <Routing />
                {/*<Footer />*/}
            </Router>
        ); 
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
