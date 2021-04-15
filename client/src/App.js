import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchBar from "./components/search/SearchBar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import ShowCard from "./components/ShowCard.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import PostCard from "./components/show/PostCard";
import ProfileDisplay from "./components/ProfileDisplay";
import ProfileForm from "./components/ProfileForm";
import Search from "./components/search/Search";
import PostsList from "./components/show/PostsList";
import Show from "./components/show/Show";
import MyShows from "./components/MyShows";

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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default function App() {
  const classes = useStyles();
  const { state } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email} {user.display_name}
    </li>
  ));
  const postsList = state.posts.map((post) => (
    <li key={post.id}> {post.text}</li>
  ));
  //const commentsList = state.comments.map((comment) => (<li key={comment.id} > {comment.text}</li>));

  return (
    <Router>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/" exact>
              <Navbar />

              <div
                className={classes.mainContent}
                style={{ marginTop: "100px" }}
              >
                <Show posts={state.posts} comments={state.comments} />
              </div>
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/users" exact>
              <div
                className={classes.mainContent}
                style={{ marginTop: "100px" }}
              >
                <h1> Users </h1>
                <ul> {userList} </ul>
              </div>
            </Route>
            <Route path="/posts" exact>
              <div
                className={classes.mainContent}
                style={{ marginTop: "100px" }}
              >
                <h1> Posts </h1>
                <ul> {postsList} </ul>
              </div>
            </Route>
            <Route path="/search" exact>
              <Search />
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
                {/* <ProfileForm />  */}
              </div>
            </Route>
          </Switch>
        </MuiThemeProvider>
      </div>
    </Router>
  );
}
