import React from "react";
import PostCard from "./PostCard";

// const comments = [
// 	{
// 		id: 1,
// 		name: "Gustav Klimt",
// 		body:
// 			"Ut do veniam consequat exercitation laborum. Exercitation Lorem id aute velit minim sunt fugiat labore eiusmod exercitation velit consequat. Deserunt veniam veniam Lorem elit elit et aliqua. Ipsum mollit eiusmod velit sint aliqua sunt fugiat pariatur labore incididunt laborum ea qui quis. Ipsum nostrud nostrud deserunt sunt nisi voluptate ex reprehenderit duis. Exercitation culpa eiusmod est eu ex pariatur et id id commodo proident. Qui ex est consequat proident nulla tempor esse exercitation laborum non velit eu.",
// 		email: "hello@world.com",
// 		image_url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Gustav_Klimt_046.jpg",
// 		likes: 2
// 	},
// 	{
// 		id: 2,
// 		name: "Manet",
// 		body:
// 			"Consectetur irure adipisicing qui irure occaecat et qui anim quis sit eu excepteur pariatur. Esse minim id labore dolor quis irure ex et esse. Quis non ex proident consectetur sit laboris. Sint laborum adipisicing Lorem qui sit cupidatat. Officia magna nostrud duis occaecat id consequat consectetur tempor est sint occaecat.",
// 		email: "hello@world.com",
// 		image_url: "www.nybooks.com/wp-content/uploads/2015/04/Manet-Argenteuil.jpg"
// 	},
// 	{
// 		id: 3,
// 		name: "Georges Bizet",
// 		body:
// 			"Reprehenderit elit irure magna eiusmod voluptate. Ea cupidatat do deserunt irure voluptate est non proident excepteur aliquip. Lorem ea amet irure sit quis ad qui officia id sit cupidatat. Irure incididunt enim est est incididunt aliquip occaecat qui ipsum nostrud velit sint ut duis.Minim nisi aute deserunt proident magna non nulla labore laborum quis. Excepteur proident incididunt est ea deserunt adipisicing dolor sint officia laboris labore. Ipsum velit nisi deserunt voluptate veniam. Ut tempor minim cillum anim laborum cupidatat dolor eu anim dolor voluptate. Enim non elit non incididunt occaecat nulla commodo.Reprehenderit non ex culpa ex tempor deserunt laboris tempor amet. Culpa consequat magna excepteur voluptate dolor laboris ullamco voluptate dolor aliquip est duis. Fugiat magna cupidatat dolor incididunt proident cupidatat.",
// 		email: "hello@world.com",
// 		likes: null,
// 		dislikes: 2
// 	},
// ];
// const posts = [
// 	{
// 		id: 1,
// 		description: "this is a post",
// 		likes: 34,
// 		dislikes: 21,
// 		creator_id: 1,
// 		created_at: "2 days ago",
// 		image_url: "https://www.nybooks.com/wp-content/uploads/2015/04/Manet-Argenteuil.jpg"
// 	},
// 	{
// 		id: 2,
// 		description: "this is another post",
// 		likes: 3,
// 		dislikes: 666,
// 		creator_id: 2,
// 		created_at: "1 day ago",
// 	},
// ];
export default function PostsList(props) {
	const { posts, comments } = props;
	console.log("👉🏻", posts)
	return posts.map((post, index) => {
		// return <h1>Hello</h1>
		return (<PostCard comments={comments} post={post} index={index} likeHandler={props.likeHandler} dislikeHandler={props.dislikeHandler} />)
	});
}
