import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCatPhoto } from "./catActions";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    imageWrapper: {
        height: '81vh',
        width: '60vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    errorText: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontWeight: 500,
        fontSize: '16px'
    },

    catImg: {
        maxHeight: '81vh',
        maxWidth: '60vw'
    },
}));

const Cats = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.cats);

    const getThunkCatPhoto = useCallback(() => dispatch(getCatPhoto()), [dispatch]);

    useEffect(() => {
        getThunkCatPhoto();
    }, [getThunkCatPhoto]);

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.imageWrapper}>
                {loading && <CircularProgress />}
                {error && <div className={classes.errorText}>Возникла ошибка загрузки⛔ <br />Повторите попытку позже...</div>}
                {!loading && !error && data && (
                    <img className={classes.catImg} src={data.url} alt="Cat" />
                )}
            </Paper>

            <Button
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={() => getThunkCatPhoto()}
            >
                Покажи кота
            </Button>
        </div>
    );
};

export default Cats;