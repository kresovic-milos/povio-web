import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { SIGNUP_PAGE, LOGIN_PAGE, USERS_PAGE } from '../../../constants';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class AppToolBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { classes, isLoggedIn, currentPage } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {currentPage}
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                {!isLoggedIn && (
                  <MenuItem onClick={this.handleClose}>
                    <Link to={USERS_PAGE}>Users</Link>
                  </MenuItem>
                )}
                {!isLoggedIn && (
                  <Link to={SIGNUP_PAGE}>
                    <MenuItem onClick={this.handleClose}>Sign Up</MenuItem>
                  </Link>
                )}
                {!isLoggedIn && (
                  <MenuItem onClick={this.handleClose}>
                    <Link to={LOGIN_PAGE}>Log In</Link>
                  </MenuItem>
                )}
                {isLoggedIn && <MenuItem onClick={this.handleLogout}>Log out</MenuItem>}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppToolBar);
