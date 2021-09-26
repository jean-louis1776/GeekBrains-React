import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dropLinks: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },

    appBar: {
        marginBottom: "15px",
    },

    root: {
        marginRight: "350px",
    },

    mainWrapper: {
        width: "350px",
        height: "100%",
        padding: "10px 10px 0px 10px",
    },

    topComponent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    input: {
        "& div": {
            borderRadius: "40px",
            "& input": {
                padding: "10px 10px",
            },
        },
    },

    chatWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default useStyles;