import React from "react";
import Style from 'style-it';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: '20vw',
    // borderRadius: ' 10%'
  },
  media: {
    height: 200,
    margin: 'auto'
  },
  monitor: {
    maxWidth: 345,

    background: "#000",
    position: "relative",
    borderTop: "3px solid #888",
    margin: "5%",
    padding: "2% 2% 4% 2%",
    borderRadius: "10px",
    borderBottomLeftRadius: "50% 2%",
    borderBottomRightRadius: "50% 2%",
    transition: "margin-right 1s",
  },
  monitor_after: {
    // content: "",
    display: "block",
    position: "absolute",
    bottom: "3%",
    left: "36%",
    height: "0.5%",
    width: "28%",
    background: "#ddd",
    borderRadius: "50%",
    boxShadow: "0 0 3px 0 white",
  },
  monitorscreen: {
    position: "relative",
    backgroundColor: "#777",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: "0",
    paddingBottom: "56.25%",
    overflow: "hidden",
  },
  "@media all and (min-width: 960px)": {
    expression: "all and (min-width: 960px)",
    monitor: {
      WebkitAnimation: "tvflicker 0.2s infinite alternate",
      MozAnimation: "tvflicker 0.5s infinite alternate",
      OAnimation: "tvflicker 0.5s infinite alternate",
      animation: "tvflicker 0.5s infinite alternate",
    },
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return Style.it(
    `#monitor {
      max-width: 28em;
      background: #000; 
      position: relative;
      border-top: 3px solid #888; 
      margin: 5%;
      padding: 2% 2% 4% 2%; 
      border-radius: 10px; 
      border-bottom-left-radius: 50% 2%; 
      border-bottom-right-radius: 50% 2%; 
      transition: margin-right 1s;
    }
    
    #monitor:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 3%;
      left: 36%;
      height: .5%; 
      width: 28%;
      background: #ddd; 
      border-radius: 50%; 
      box-shadow: 0 0 3px 0 white; 
    }
    
    #monitorscreen {
      position: relative;
      background-color: #777;
      background-size: cover; 
      background-position: top center;
      height: 0; 
      padding-bottom: 56.25%; 
      position: relative;
      overflow: hidden;
    }`,
    <div id="monitor">
      <div id="monitorscreen">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://fanart.tv/fanart/tv/80337/seasonposter/mad-men-5905e7beb233c.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
