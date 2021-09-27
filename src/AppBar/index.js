import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import ChatPreview from "./ChatPreview";
import InputBase from '@material-ui/core/InputBase';
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../styles/AppBar/indexStyles";
import { addChatToFirebase } from './actions';

const AppBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const { chats, myUid } = useSelector((state) => state.chat);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [uId, setuId] = useState("");

  const AddChat = () => {
    addChatToFirebase(myUid, uId);
  };

  // const handleLogOut = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     await firebase.auth().signOut()
  //     dispatch(changeIsAuth(false));
  //     history.push("/login");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };


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
            <Link onClick={() => history.push("/profile")} className={classes.dropLinks}>
              Профиль
            </Link>
          </MenuItem>
          <MenuItem key={4}>Настройки</MenuItem>
          <MenuItem key={5}>Выйти</MenuItem>
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
            value={uId}
            onChange={(e) => setuId(e.target.value)}
          />
        </div>
      </Box>

      <Box className={classes.chatWrapper}>
        {Object.keys(chats).map((uid) => (
          <ChatPreview
            // profile={profile}
            uid={uid}
          // messages={messages[profile.id] || []}
          />
        ))}
      </Box>

      <Box>
        <TextField value={uId} onChange={(e) => setuId(e.target.value)} />
        <Button onClick={AddChat}>Добавить</Button>
      </Box>
    </Drawer>
  );
};

export default AppBar;
