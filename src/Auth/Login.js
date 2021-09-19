import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { changeIsAuth } from "../Chat/chatSlice";
import { useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import brandLogo from '../img/brandLogo.png';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        '& > *': {
            padding: '60px 110px'
        },
    },

    loginWrapper: {
        userSelect: 'none'
    },

    loginHeading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px'
    },

    brandLogo: {
        marginRight: '20px'
    },

    brandTitle: {
        fontSize: '46px',
        fontWeight: 200
    },

    loginForm: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },

    formHeading: {
        fontWeight: 300,
        marginBottom: '15px'
    },

    inputWrapper: {
        marginBottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    lastInput: {
        marginBottom: '25px'
    },

    input: {
        height: '50px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        outline: 'none',
        color: theme.palette.text.primary,
        fontSize: '20px',
        fontFamily: 'Roboto',
        fontWeight: 300,
        padding: '5px',
        border: 'none',
        borderBottom: '1px solid'
    },

    buttonWrapper: {
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    error: {
        marginBottom: '10px',
        color: '#ff6e6e'
    },

    signUp: {
        fontWeight: 300
    },

    signUpLink: {
        color: '#1e88e5',
        textDecoration: 'none',
        marginLeft: '10px'
    }
}));

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