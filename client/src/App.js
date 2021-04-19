import { useContext } from 'react';
import { authContext } from './components/AuthProvider';
import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import ProfileDisplay from "./components/ProfileDisplay";
import Search from "./components/search/Search";
import Show from "./components/show/Show";
import MyShows from "./components/MyShows/MyShows";
import HomePage from './HomePage';
import theme from "./theme"



const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default function App() {
  const classes = useStyles();
  const {
      currUser
  } = useApplicationData();
  //   const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} {user.display_name}</li>));
  //   const postsList = state.posts.map((post) => (<li key={post.id} > {post.text}</li>))
    //const commentsList = state.comments.map((comment) => (<li key={comment.id} > {comment.text}</li>));   
    const { auth } = useContext(authContext);
  
      
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/" exact>
              <div style={{marginTop: '0px'}}>
               <HomePage />
              </div>
            </Route>

            <Route path="/shows/:id">
            <Navbar />
              <div className={classes.mainContent} style={{marginTop: '100px'}}>
                <Show />
              </div>
            </Route>

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/search" exact>
            <Navbar />
              <div
                className={classes.mainContent}
                style={{ marginTop: "100px" }}
              >
              <Search />
              </div>
            </Route>
            <Route path="/myshows" exact>
              <Navbar />
              <div
                className={classes.mainContent}
                style={{ marginTop: "100px" }}
              >
                <MyShows />
              </div>
            </Route>
            <Route path="/profile" exact>
              <Navbar />
              <div
                className={classes.mainContent}
                style={{ marginTop: "100px" }}
              >
                <ProfileDisplay />
              </div>
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}
