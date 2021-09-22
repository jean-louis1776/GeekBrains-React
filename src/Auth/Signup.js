import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../Chat/chatSlice";
import firebase from "firebase/compat/app";
import Paper from '@material-ui/core/Paper';
import brandLogo from '../img/brandLogo.png';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import { db } from '../App';

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

    signupWrapper: {
        userSelect: 'none'
    },

    signUpHeading: {
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

    signUpForm: {
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

    logIn: {
        fontWeight: 300
    },

    logInLink: {
        color: '#1e88e5',
        textDecoration: 'none',
        marginLeft: '10px'
    }
}));

const Signup = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            db.ref('profile').child(user.uid).set({
                name,
                surname
            });
            dispatch(changeIsAuth(true))
            history.push('/')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.signupWrapper}>
                <div className={classes.signUpHeading}>
                    <img src={brandLogo} alt="Logo" className={classes.brandLogo} />
                    <h1 className={classes.brandTitle}>Hellogram</h1>
                </div>

                <form onSubmit={handleSubmit} className={classes.signUpForm}>
                    <h3 className={classes.formHeading}>Создайте свой аккаунт Hellogram</h3>
                    <div className={classes.inputWrapper}>
                        <input
                            placeholder="Имя"
                            name="name"
                            type="name"
                            onChange={handleNameChange}
                            value={name}
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.inputWrapper}>
                        <input
                            placeholder="Фамилия"
                            name="surname"
                            type="surname"
                            onChange={handleSurnameChange}
                            value={surname}
                            className={classes.input}
                        />
                    </div>
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
                        {error && <p className={classes.error}>Ошибка: введите корректные данные</p>}
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Регистрация
                        </Button>
                    </div>
                    <p className={classes.logIn}>
                        Уже зарегистрированы? <Link to="/login" className={classes.logInLink}>Войдите</Link>
                    </p>
                </form>
            </Paper>
        </div>
    );
};

export default Signup;