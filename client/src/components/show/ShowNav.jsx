import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});


export default function ShowNav(props) {
  const classes = useStyles();

  const setValue = () => {
   return props.viewChat === 0 ? props.transitionToChat : console.log("nope");
  }

  return (
    <BottomNavigation
      value={props.viewChat}
      onChange={(event, newValue) => {
        props.transitionToChat();
        console.log("❌", props.viewChat)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
      <BottomNavigationAction label="Posts" icon={<ForumIcon />} />
    </BottomNavigation>
  );
}