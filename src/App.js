import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { MyDataContext } from './index';
import Chat from "./Chat";
import Playground from "./Playground";
import Home from "./Home";
import AppBar from "./AppBar";
import Profile from "./Profile";

const App = () => {
    const appVer = useContext(MyDataContext);
    console.log('APP INFO: ', appVer);

    return (
        <Router>
            <AppBar />

            <Switch>
                <Route path='/profile'>
                    <Profile />
                </Route>

                <Route path='/chat'>
                    <Chat />
                </Route>

                <Route path='/playground'>
                    <Playground />
                </Route>

                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;