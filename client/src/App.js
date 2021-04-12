import './App.css';
import useApplicationData from './hooks/useApplicationData';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormHelperText } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar from './components/Navbar.jsx'
import ShowCard from './components/ShowCard.jsx'
import Login from './components/Login';
import Register from './components/Register';
import PostCard from './components/PostCard'
import Comment from './components/Comment';
import SearchBar from './components/SearchBar';

const theme = createMuiTheme({
  // palette: {
  //   background: {
  //     default: '#303030'
  //   },
  //   secondary: {
  //     main: orange[500]
  //   },
  //   text: {
  //     primary : green[500]
  //   }
  // }
});

const useStyles = makeStyles({
  mainContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

const App = () => {
  const classes = useStyles();
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} {user.display_name}</li>));

      
      return(
      <Router>
        <div className="App" >
          <MuiThemeProvider theme={theme} >
            <CssBaseline />
            <Switch>
              <Route path="/" exact>
                <Navbar />
                <div className={classes.mainContent} style={{marginTop: '100px'}}>
                  <PostCard />
                  <ShowCard />
                </div>
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/users" exact>
                <div className={classes.mainContent} style={{marginTop: '100px'}}>
                  <h1> Users </h1>
                  <ul> {userList} </ul>
                </div>
              </Route>
            </Switch>
          </MuiThemeProvider>
        </div >
      </Router>
    );
};
