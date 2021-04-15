import React, { useEffect } from "react";
import io from "socket.io-client";

export default function Chat() {
	useEffect(() => {
		console.log("TEST");
		const conn = io();
		// socket.on("connect", () => {
		//   console.log("we have connected!");
		// });
		conn.on('initial', message => {
			console.log(message);
		});
	}, []);

	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	);
}
