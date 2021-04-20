import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useChat from "../../hooks/useChat";
import {
  Paper,
  Box,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import ShowNav from "./ShowNav"
import { useContext } from 'react';
import { authContext } from '../AuthProvider';

const useStyles = makeStyles((theme) => ({
  MessagesContainer: {
    margin: "1% 5% 1% 5%",
  },
  messagesList: {
    listStyleType: "none",
    // listStylePosition: "outside",
    marginBottom: "4%",
    padding: "1% 0% 0% 0%"

  },
  messageItemMyMessage: {
    textAlign: "right",
    marginRight: "5%",
    marginLeft: "10%",
    marginTop: "2%",
    padding: "0px 1px 1px 1px",
        // paddingBottom: "2px",
    border: "none",
    background: theme.palette.primary.main,
    boxShadow: "0px 8px 16px -3px rgba(43,167,250,0.5)"
  },
  MessageItemReceivedMessage: {
    textAlign: "left",
    marginRight: "10%",
    marginTop: "2%",
    marginLeft: "5%",
    padding: "0px 1px 1px 1px",
    // paddingBottom: "2px",
    border: "none",
    background: theme.palette.primary.dark,
    boxShadow: "5px 6px 16px -4px rgba(43,167,250,0.5)"
  }
}));

export default function Chat(props) {
  const classes = useStyles();

  const { user } = useContext(authContext);

  const userId = user.id
  const displayName = user.display_name

  const { roomId, oldChat } = props; // roomId == show_id in the DataBase
  const { messages, sendMessage } = useChat({ roomId, userId, displayName }); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  const pressEnter = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage()
    }
  }

  return (
    <Paper className={classes.MessagesContainer}>
      <div>
        <ul className={classes.messagesList}>
          {oldChat.map((message, i) => (
            <li
              key={i}
            >
              <Paper
                className={
                  message.creator_id === userId
                    ? classes.messageItemMyMessage
                    : classes.MessageItemReceivedMessage
                }
              >
                <Box m={1}>
                  <h4 style={{padding: "0px", opacity: "0.6"}}>
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
                  <h4 style={{padding: "0px", opacity: "0.6"}}>
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
          autoFocus={true}
          type="reset"
          id="standard-textarea"
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyDown={(e) => pressEnter(e)}
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
