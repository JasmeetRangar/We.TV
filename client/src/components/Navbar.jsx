import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import TvIcon from '@material-ui/icons/Tv';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'linear-gradient(140deg, rgba(4,4,18,1) 0%, rgba(76,124,251,1) 100%)',
    border: "none"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar className={classes.Toolbar}>
      <Link to="/myshows">
        <IconButton color="#fff" aria-label="shows">
          <TvIcon />
        </IconButton>
        </Link>
        <Link to="/search">
          <IconButton color="#fff" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Link>
        <Link to="/profile">
        <IconButton color="#fff" aria-label="account">
          <AccountCircle />
        </IconButton>
        </Link>
        <Link to="/">
        <IconButton color="#fff" aria-label="logout">
          <ExitToAppIcon />
        </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
  )
}