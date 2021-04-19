import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useChat from "../../hooks/useChat";
import {
  Paper,
  Box,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  withTheme,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import ShowNav from "./ShowNav"
import { useContext } from 'react';
import { authContext } from '../AuthProvider';

const useStyles = makeStyles((theme) => ({
  MessagesContainer: {
    maxWidth: 500,
    minWidth: "40%",
    marginTop: "1%",
    marginBottom: "1%",
    margin: "auto",
  },
  messagesList: {
    listStyleType: "none",
    margin: "5%"
  },
  messageItemMyMessage: {
    textAlign: "right",
    marginRight: "2%",
    marginLeft: "10%",
    // background: "CornflowerBlue",
    // color: "white",
    background: theme.palette.primary.main
  },
  MessageItemReceivedMessage: {
    textAlign: "left",
    marginRight: "10%",
    marginLeft: "2%",
    // background: "DodgerBlue",
    color: "white",
    background: theme.palette.primary.dark
  },
}));

export default function Chat(props) {
  const classes = useStyles();

  const { user } = useContext(authContext);

  const userId = user.id
  const displayName = user.display_name
  // const userId = "1"; //This is a hardcoded test value, figure out how to implent it when we have user auth set up
  // const displayName = "Jerry Seinfeld"; //This is a hardcoded test value. We'll get these from the user auth prop or whatever

  // const roomId = 1; //This is a hardcoded test value, use the next line instead
  const { roomId, oldChat } = props; // roomId == show_id in the DataBase
  const { messages, sendMessage } = useChat({ roomId, userId, displayName }); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // console.log(newMessage); //Logs before message is send to server. Get rid of this console.log
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <Paper className={classes.MessagesContainer}>
      <div>
        <ul className={classes.messagesList}>
          {oldChat.map((message, i) => (
            <li
              key={i}
              // HEY HEY YOU MIGHT HAVE TO UPDATE userID here depending on how you handle auth
            >
              <Paper
                className={
                  message.creator_id == userId
                    ? classes.messageItemMyMessage
                    : classes.MessageItemReceivedMessage
                }
              >
                <Box m={1}>
                  <h4>
                    {message.display_name}{" "}
                  </h4>
                  {message.message}
                </Box>
              </Paper>
            </li>
          ))}
          {messages.map((message, i) => (
            <li key={i}>
              <Paper
                className={
                  message.ownedByCurrentUser
                    ? classes.messageItemMyMessage
                    : classes.MessageItemReceivedMessage
                }
              >
                <Box m={1}>
                  <h4>
                    {message.displayName}{" "}
                  </h4>
                  {message.body}
                </Box>
              </Paper>
            </li>
          ))}
        </ul>
      </div>
      <FormControl style={{ width: "95%", marginBottom: "5%" }}>
        <Input
          autoFocus="true"
          type="reset"
          id="standard-textarea"
          value={newMessage}
          onChange={handleNewMessageChange}
          label="Chat"
          placeholder="Write message..."
          multiline
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSendMessage}>
                <Send />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <ShowNav 
      transitionToChat={props.transitionToChat}
      viewChat={props.viewChat}
      />
    </Paper>
  );
}
