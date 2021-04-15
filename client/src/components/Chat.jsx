import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Chat() {
  const [messages, setMessages] = useState([]);
	useEffect(() => {
		console.log("TEST");
		const conn = io();
		// socket.on("connect", () => {
		//   console.log("we have connected!");
		// });
		conn.on('initial', info => {
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
