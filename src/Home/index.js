import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  homePageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  homePageTitle: {
    borderRadius: ' 13px',
    padding: '2px 15px',
    backgroundColor: '#424242',
    fontWeight: 500
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homePageWrapper}>
      <span className={classes.homePageTitle}>Выберите, кому хотели бы написать</span>
    </div>
  );
};

export default Home;
