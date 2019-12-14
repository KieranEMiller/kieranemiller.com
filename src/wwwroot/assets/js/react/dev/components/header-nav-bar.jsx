import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Routes } from '../constants.jsx';

class HeaderNavBar extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            currentRoute: this.props.location.pathname,
            routes: [
                { route: Routes.INDEX, display: "Home", active: false }
            ]
        };
		console.log(this.state);
    };

    clickHandler(route) {
        this.setState(prevState => {
            const list = prevState.routes.map((item, j) => {
                item.active = (item.route === route);
                return item;
            });

            return { list };
        });
    };

    render() {
 
        return (
            
            <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                Photos
                </Typography>
            </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(HeaderNavBar);