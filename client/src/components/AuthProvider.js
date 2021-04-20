import { createContext, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';
export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const { state } = useApplicationData();
  // Perform login process for the user & save authID, etc
  const login = (userInfo) => {
    const {email, password} = userInfo;
    for(let currUser of state.users) {
      if (currUser.email === email && currUser.password === password) {
        setUser(currUser);
        setAuth(true);
        return true;
      }
    }
    return false;
  }

  // authContext will expose these items
  const userData = { user, login };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};
export const authContext = createContext();