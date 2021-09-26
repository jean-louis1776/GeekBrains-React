import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import moment from "moment";
import useStyles from '../styles/AppBar/ChatPreviewStyles';
import { db } from '../App';
import { useObjectVal } from 'react-firebase-hooks/database';

const ChatPreview = ({ uid }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [snapshot, loading, error] = useObjectVal(db.ref('profile').child(uid));

  if (loading) {
    return <div>Loading</div>
  };

  if (error) {
    return <div>Error</div>
  };

  if (snapshot) {
    const { name, surname } = snapshot;

    const locationSplitted = location.pathname.split("/");

    const isSelected =
      locationSplitted[1] === "chat" && locationSplitted[2] === uid;

    return (
      <Box
        className={clsx(classes.mainWrapper, {
          [classes.selectedChat]: isSelected,
        })}
        onClick={() => history.push(`/chat/${uid}`)}
      >
        <Avatar alt="User Avatar" src={null} />

        <Box className={classes.midddleContentWrapper}>
          <Typography variant="h6" className={classes.overFlowText}>
            {name} {surname}
          </Typography>
          <Typography variant="subtitle1" className={classes.overFlowText}>
            {/* {lastMessage.text} */}
          </Typography>
        </Box>

        <Box className={classes.rightContentWrapper}>
          <Typography variant="caption">
            {/* {moment(lastMessage.timeStamp).format("H:mm")} */}
          </Typography>
        </Box>
      </Box>
    );
  }

  return null;
};

export default ChatPreview;
