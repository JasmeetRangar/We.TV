import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
    justifyContent: 'space-around'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar className={classes.Toolbar}>
        <IconButton color="inherit" aria-label="shows">
          <TvIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="account">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit" aria-label="logout">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
  )
}