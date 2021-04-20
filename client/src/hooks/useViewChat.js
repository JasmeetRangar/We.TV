import {useState} from 'react';

export default function useViewChat() {
  const [viewChat, setViewChat] = useState(0);

  const transitionToChat = () => {
    viewChat === 0 ? setViewChat(1) : setViewChat(0);
  };


  return { transitionToChat };
}