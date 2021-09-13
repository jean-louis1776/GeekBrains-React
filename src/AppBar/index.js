import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import ChatPreview from "./ChatPreview";
import InputBase from '@material-ui/core/InputBase';
import { Link } from "react-router-dom";

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

const AppBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const { profiles, messages } = useSelector((state) => state.chat);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      variant="permanent"
      open
      classes={{ paper: classes.mainWrapper, root: classes.root }}
    >
      <Box className={classes.topComponent}>
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          anchorPosition={{ top: 50, left: 25 }}
          anchorReference={"anchorPosition"}
        >
          <MenuItem key={1} onClick={handleClose}>
            <Link onClick={() => history.push("/")} className={classes.dropLinks}>
              Домой
            </Link>
          </MenuItem>
          <MenuItem key={2} onClick={handleClose}>
            <Link onClick={() => history.push("/news")} className={classes.dropLinks}>
              Новости
            </Link>
          </MenuItem>
          <MenuItem key={3} onClick={handleClose}>
            <Link onClick={() => history.push("/cats")} className={classes.dropLinks}>
              Котики
            </Link>
          </MenuItem>
          <MenuItem key={4} onClick={handleClose}>
            <Link onClick={() => history.push("/profile")} className={classes.dropLinks}>
              Профиль
            </Link>
          </MenuItem>
          <MenuItem key={5}>Настройки</MenuItem>
          <MenuItem key={6}>Выйти</MenuItem>
        </Menu>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Поиск…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Box>

      <Box className={classes.chatWrapper}>
        {profiles.map((profile) => (
          <ChatPreview profile={profile} messages={messages[profile.id]} />
        ))}
      </Box>
    </Drawer>
  );
};

export default AppBar;
