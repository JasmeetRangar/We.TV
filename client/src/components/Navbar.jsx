import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import TvIcon from "@material-ui/icons/Tv";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
          <IconButton color="inherit" aria-label="shows">
            <Link style={{color:"white"}}>
            <TvIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" aria-label="search">
            <Link style={{color:"white"}}>
            <SearchIcon />
            </Link>
          </IconButton>
          <IconButton color="secondary" aria-label="account">
            <Link to="/profile" style={{color:"white"}}>
              <AccountCircle />
            </Link>
          </IconButton>
          <IconButton color="inherit" aria-label="logout">
            <Link style={{color:"white"}}>
            <ExitToAppIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
