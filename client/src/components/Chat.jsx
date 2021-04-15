import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const conn = io();

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
	useEffect(() => {
		console.log("TEST");
		// socket.on("connect", () => {
		//   console.log("we have connected!");
		// });
		conn.on('connection', socket => {
			socket.emit('chatId', {id: props.id});
		})
		conn.on('initial', info => {
			console.log("Front initial info: ", info);
      info.map(chatMessage => {
        setMessages(prev => [...prev, chatMessage])
      })
		});
	}, []);
  
	return (
		<div>
			 {messages.map(chatMessage => {
        return (
          <div>
        <h1>{chatMessage.display_name}</h1>
        <h2>{chatMessage.message}</h2>
        </div>
        )
      })}
		</div>
	);
}
