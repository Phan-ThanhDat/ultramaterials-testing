/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBar: {},
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginButton: {
    background: theme.palette.secondary,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {
    auth: false,
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.appBar}>
            <img
              src="https://ultrahack.org/images/uh-red.png"
              alt="Ultrahack logo"
              className={classes.logo}
            />
            <div className={classes.sectionDesktop}>
              <Button>Partnering</Button>
              <Button>Participate</Button>
              <Button>Volunteering</Button>
              <Button>Challenges</Button>
              <Button>About</Button>
            </div>
            <div className={classes.grow} />
            {auth ? null : (
              <Button className={classes.loginButton}>Login</Button>
            )}
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'header', reducer });

export default compose(
  withStyles(styles),
  withReducer,
  withConnect,
)(Header);
