import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ChatIcon from "@material-ui/icons/Chat";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles({
  root: {
    background: "transparent"
  },
});

export default function ShowNav(props) {
  const classes = useStyles();

  const setValue = () => {
    return props.viewChat === 0 ? props.transitionToChat : console.log("nope");
  };

  return (
    <BottomNavigation
      value={props.viewChat}
      onChange={(event, newValue) => {
        props.transitionToChat();
      }}
      showLabels
      className={classes.root}
    >
      {/* Button is disabled if the related page is currently in view */}
      {props.viewChat === 0 ? (
        <BottomNavigationAction
          label="Chat"
          icon={<ChatIcon />}
          disabled={true}
        />
      ) : (
        <BottomNavigationAction
          label="Chat"
          icon={<ChatIcon />}
          disabled={false}
        />
      )}
      
      {props.viewChat === 0 ? (
      <BottomNavigationAction
        label="Posts"
        icon={<ForumIcon />}
        diabled={false}
        />
        ) : (
        <BottomNavigationAction
          label="Posts"
          icon={<ForumIcon />}
          disabled={true}
          />
      )}
    </BottomNavigation>
  );
}
