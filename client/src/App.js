import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';
import Navbar from './components/Navbar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";


const theme = createMuiTheme({
  palette: {
    background: {
      default: "#303030"
    },
    secondary: {
      main: orange[500]
    },
    text: {
      primary : green[500]
    }
  }
});

const App = () => {
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} {user.display_name}</li>
));
return (
  <div className="App" >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar></Navbar>
        <h1> Users </h1>

        <ul> {userList} </ul>
      </MuiThemeProvider>
    </div >
);
};
export default App;
