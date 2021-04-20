import "./App.css";
import {
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
  
      
  return (
    <Router>
      <div className="App">
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </div>
    </Router>
  );
}
