import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:3001";

export default function useChat({roomId, userId, displayName}) {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId }
    });

      // Listens for incoming messages
      socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
        const incomingMessage = {
          ...message,
          // ownedByCurrentUser: message.senderId === socketRef.current.id, //<<<< OG code
          ownedByCurrentUser: message.senderId === userId, //<<<< Trying this out
        };
        setMessages((messages) => [...messages, incomingMessage]);
      });
      
      // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, userId, displayName]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      // senderId: socketRef.current.id, //<<<< OG code
      senderId: userId,
      displayName: displayName,
    });
  };

  return { messages, sendMessage };
};