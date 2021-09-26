import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Home from "./Home";
import Profile from './Profile';
import News from "./News";
import CustomRoute from "./util/CustomRoute";
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import firebase from "firebase/compat";
import { MyDataContext } from './index';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  }
}));

const firebaseConfig = {
  apiKey: "AIzaSyAfVC85ziNJ0AesKmKblIord2g8Z3aRgC0",
  authDomain: "hellogram-aleksin.firebaseapp.com",
  databaseURL: "https://hellogram-aleksin-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hellogram-aleksin",
  storageBucket: "hellogram-aleksin.appspot.com",
  messagingSenderId: "651294231433",
  appId: "1:651294231433:web:8db6d9915c9add0080af58"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
  const classes = useStyles();

  const appVer = useContext(MyDataContext);
  console.log('APP INFO: ', appVer);

  return (
    <Router>
      <div className={classes.mainWrapper}>

        <Switch>
          <CustomRoute secured path="/chat/:id">
            <Chat />
          </CustomRoute>

          <CustomRoute secured withAppBar={true} path="/profile">
            <Profile />
          </CustomRoute>

          <CustomRoute secured withAppBar={true} path="/news">
            <News />
          </CustomRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <CustomRoute secured withAppBar={true} path="/">
            <Home />
          </CustomRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
