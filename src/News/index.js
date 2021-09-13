import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, CircularProgress, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { getNews } from "./newsActions";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    newsWrapper: {
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

    news: {
        maxHeight: '81vh',
        maxWidth: '60vw',
        padding: '15px',
    },

    newsBox: {
        width: "100%",
        padding: "10px 0px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.2s",

        "&:hover": {
            backgroundColor: "#5e5e5e",
        }
    },

    newsLink: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    newsImg: {
        width: '60px',
        height: '60px'
    },

    middleNewsWrapper: {
        marginLeft: "20px",
        width: "85%",
        height: "100%",
    },
}));

const News = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.news);

    const getThunkNews = useCallback(() => dispatch(getNews()), [dispatch]);

    useEffect(() => {
        getThunkNews();
    }, [getThunkNews]);

    return (
        <div className={classes.wrapper}>
            <h2>Новости</h2>
            <Paper className={classes.newsWrapper}>
                {loading && <CircularProgress />}
                {error && <div className={classes.errorText}>Возникла ошибка загрузки⛔ <br />Повторите попытку позже...</div>}
                {!loading && !error && data && (
                    <div className={classes.news}>
                        <Box className={classes.newsBox}>
                            <a href={data.articles[0].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[0].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[0].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[0].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[1].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[1].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[1].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[1].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[2].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[2].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[2].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[2].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[3].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[3].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[3].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[3].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[4].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[4].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[4].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[4].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[5].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[5].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[5].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[5].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[6].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[6].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[6].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[6].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[7].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[7].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[7].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[7].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[8].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[8].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[8].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[8].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[9].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[9].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[9].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[9].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[10].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[10].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[10].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[10].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[11].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[11].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[11].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[11].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                        <Divider variant="inset" />
                        <Box className={classes.newsBox}>
                            <a href={data.articles[12].url} target='_blank' rel="noopener noreferrer" className={classes.newsLink}>
                                <Avatar alt="News Img" src={data.articles[12].urlToImage} className={classes.newsImg} />

                                <Box className={classes.middleNewsWrapper}>
                                    <Typography variant="h6">
                                        {data.articles[12].title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {data.articles[12].description}
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                    </div>
                )}
            </Paper>
        </div>
    );
};

export default News;