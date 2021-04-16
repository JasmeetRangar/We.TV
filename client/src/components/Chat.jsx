import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useChat from "../hooks/useChat";

export default function Chat(props) {
  const params = useParams();

  const roomId = 1; //This is a hardcoded test value
  // const { roomId } =params.id; // roomId == show_id in the DataBase
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
		console.log(newMessage) //Get rid of this console.log
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <div className="messages-container">
        <ul className="messages-list">
					<li>test</li>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ul>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>

    // Trash everything below this line.
    // I just kept it to check the props
    // ---------------------------->
    // <div>
    //   {messages.map((chatMessage) => {
    //     return (
    //       <div>
    //         <h1>{chatMessage.display_name}</h1>
    //         <h2>{chatMessage.message}</h2>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
