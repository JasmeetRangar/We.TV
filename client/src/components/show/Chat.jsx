import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useChat from "../../hooks/useChat";

export default function Chat(props) {
  const params = useParams();

	const userId = "1"; //This is a hardcoded test value, figure out how to implent it when we have user auth set up
	const displayName = "Jerry Seinfeld" //This is a hardcoded test value. We'll get these from the user auth prop or whatever


  // const roomId = 1; //This is a hardcoded test value, use the next line instead
  const { roomId, oldChat } = props; // roomId == show_id in the DataBase
  const { messages, sendMessage } = useChat({roomId, userId, displayName}); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
		console.log(newMessage) //Logs before message is send to server. Get rid of this console.log
   console.log('💦',oldChat) // REALLY delete this one, it doesn't even have anything to do with this function
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <div className="messages-container">
        <ul className="messages-list">
					<li>test</li>
          {oldChat.map((message, i) => (
            <li
              key={i}
              // HEY HEY YOU MIGHT HAVE TO UPDATE userID here depending on how you handle auth
              className={`message-item ${
                message.creator_id === userId  ? "my-message" : "received-message"
              }`}
            >
							<h2>{message.display_name} {
                message.creator_id == userId ? "✅my-message" : "🔵received-message"
              }</h2>
              {message.message}
            </li>
          ))}
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
							<h2>{message.displayName} ${
                message.ownedByCurrentUser ? "✅my-message" : "🔵received-message"
              }</h2>

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
