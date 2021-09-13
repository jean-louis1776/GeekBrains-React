import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Home from "./Home";
import AppBar from "./AppBar";
import Profile from './Profile';
import Cats from "./Cats";
import News from "./News";
import { MyDataContext } from './index';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();

  const appVer = useContext(MyDataContext);
  console.log('APP INFO: ', appVer);

  return (
    <Router>
      <div className={classes.mainWrapper}>
        <AppBar />

        <Switch>
          <Route path="/chat/:id">
            <Chat />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/cats">
            <Cats />
          </Route>

          <Route path="/news">
            <News />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
