import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';
import Navbar from './components/Navbar'

const App = () => {
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} {user.display_name}</li>
));
return (
<div className="App" >
  <Navbar></Navbar>
  <h1> Users </h1>

  <ul> {userList} </ul>
</div >
);
};
export default App;
