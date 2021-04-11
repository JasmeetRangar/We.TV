import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import TvIcon from '@material-ui/icons/Tv'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
    // marginRight: theme.spacing(2),
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar className={classes.Toolbar}>
        <IconButton color="inherit" aria-label="menu">
          <TvIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="menu">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="menu">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit" aria-label="menu">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
  )
}