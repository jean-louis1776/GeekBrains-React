import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../Chat/chatSlice";
import firebase from "firebase/compat/app";
import Paper from '@material-ui/core/Paper';
import brandLogo from '../img/brandLogo.png';
import { Button } from "@material-ui/core";
import clsx from "clsx";
import { db } from '../App';
import useStyles from '../styles/Auth/SignupStyles';

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
                surname,
                email,
                password
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