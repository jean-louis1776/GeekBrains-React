import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  messageList: {
    width: "100%",
    height: "93%",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    padding: '20px',
  },

  senderMessage: {
    alignSelf: "flex-start",
    marginRight: '40%',
    backgroundColor: "#A1A1A1",
    borderRadius: '10px 10px 10px 0px',
  },
  userMessage: {
    alignSelf: "flex-end",
    marginLeft: '40%',
    backgroundColor: "#198cff",
    borderRadius: '10px 10px 0px 10px',
  },

  message: {
    padding: "5px",
    marginBottom: "10px",
  },
}));

const MessageList = ({ messagesArray }) => {
  const classes = useStyles();
  const { myUid } = useSelector((state) => state.chat);

  return (
    <div className={`${classes.messageList} messageList`}>
      {messagesArray &&
        messagesArray.map((message, i) => (
          <div
            key={i}
            className={`
            ${message.authorUid === myUid
                ? classes.userMessage
                : classes.senderMessage
              } ${classes.message}`}
          >
            {message.messageText}
          </div>
        ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
