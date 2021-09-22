import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import AppBar from "../AppBar";
import { initMessageTracking } from "../Chat/chatActions";
import { changeIsAuth, setMyUid } from '../Chat/chatSlice'
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "firebase/compat/app";

const CustomRoute = ({ secured, children, withAppBar = true, ...rest }) => {
    const { isAuthenticated, myUid } = useSelector((state) => state.chat);

    const [user, loading, error] = useAuthState(firebase.auth());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMessageTracking());
    }, [dispatch]);

    if (user && !myUid) {
        dispatch(setMyUid(user.uid));
        dispatch(changeIsAuth(true));

        return (
            <Route {...rest}>
                {withAppBar && <AppBar />}
                {children}
            </Route>
        );
    };

    if ((secured && isAuthenticated) || !secured) {
        return (
            <Route {...rest}>
                {withAppBar && <AppBar />}
                {children}
            </Route>
        );
    };

    return <Redirect to={{ pathname: "/login" }} />;
};

export default CustomRoute;