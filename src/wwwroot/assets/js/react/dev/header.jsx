import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

import {Routes} from './constants.jsx';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawerOpen: false,
    left: false,
  });

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, drawerOpen: open });
  };

  return (
    <div id="header">
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div id="title_block">
              <div className="title">
                  <a href={Routes.INDEX}>Kieran E. Miller</a>
                </div>
              <div className="title_sub">
                software engineer
              </div>
          </div>
          <div className="nav_container">
              <ul>
                <li><Link to={Routes.PROJECTS}>Projects</Link></li>
                <li><Link to={Routes.CONTACT}>Contact</Link></li>
                <li><Link to={Routes.ABOUT}>About</Link></li>
              </ul>

          </div>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {[
                {display:"Home", href:Routes.INDEX}, 
                {display:"Projects", href:Routes.PROJECTS}, 
                {display:"Contact", href:Routes.CONTACT},
                {display:"About", href:Routes.ABOUT}
              ].map((item, index) => (
              <ListItem button component="a" key={item.href} href={item.href}>
                  <ListItemText className={classes.header_text_sm} primary={item.display} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </SwipeableDrawer>
      
    </div>
  );
}
