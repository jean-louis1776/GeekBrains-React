import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { changeIsAuth } from "../Chat/chatSlice";
import { useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import brandLogo from '../img/brandLogo.png';
import { Button } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "../styles/Auth/LoginStyles";

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(changeIsAuth(true));
            history.push("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.loginWrapper}>
                <div className={classes.loginHeading}>
                    <img src={brandLogo} alt="Logo" className={classes.brandLogo} />
                    <h1 className={classes.brandTitle}>Hellogram</h1>
                </div>


                <form onSubmit={handleSubmit} className={classes.loginForm}>
                    <h3 className={classes.formHeading}>Войдите в свой аккаунт Hellogram</h3>
                    <div className={classes.inputWrapper}>
                        <input
                            placeholder="E-mail"
                            name="email"
                            type="email"
                            onChange={handleEmailChange}
                            value={email}
                            className={classes.input}
                        />
                    </div>
                    <div className={clsx(classes.inputWrapper, classes.lastInput)}>
                        <input
                            placeholder="Пароль"
                            name="password"
                            onChange={handlePassChange}
                            value={password}
                            type="password"
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.buttonWrapper}>
                        {error && <p className={classes.error}>Ошибка: такого аккаунта не существует</p>}
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >Войти
                        </Button>
                    </div>
                    <p className={classes.signUp}>
                        Ещё нет аккаунта? <Link to="/signup" className={classes.signUpLink}>Зарегистрироваться</Link>
                    </p>
                </form>
            </Paper>
        </div>
    );
};

export default Login;