import {useState} from 'react';

export default function useViewChat() {
  const [viewChat, setViewChat] = useState(false);

  const transitionToChat = () => {
    viewChat ? setViewChat(true) : setViewChat(false);
    console.log(viewChat);
  };

  return { transitionToChat };
}