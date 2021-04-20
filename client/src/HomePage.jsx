import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  background: {
    background: "black",
    width: "100%",
    height: "100%",
    position: "fixed",
  },
  backgroundImage: {
    backgroundImage:
      "url(https://raw.githubusercontent.com/JasmeetRangar/final-project/master/client/public/tv_screen.gif)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    width: "100vw",
    height: "100vh",
    marginTop: "0px",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: "white",
    textShadow: "-5px 0px #26415e",
    position: "relative",
    top: "20%",
    fontSize: "5em",
    opacity: "40%",
    fontFamily: "'Bowlby One SC', sans-serif",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    bottom: "50%",
  },
  button: {
    margin: "0% 5% 0% 5%",
    color: "#c9e3ff",
    opacity: "70%",
  }
}));

export default function HomePage() {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (route) => {
    history.push(`/${route}`)
  }

  return (
    <div className={classes.background}>
      <div className={classes.backgroundImage}>
        <h1 className={classes.title}>We.TV</h1>
      </div>
      <div className={classes.buttons}>
        <Button className={classes.button} onClick={() => handleClick("login")}>Login</Button>
        <Button className={classes.button} onClick={() => handleClick("register")}>Register</Button>
      </div>
    </div>
  );
}
