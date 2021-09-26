import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;