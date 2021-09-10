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

    "&::-webkit-scrollbar": {
      width: '6px !important',
      height: '6px !important'
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
      borderRadius: '3px'
    },

    "&::-webkit-scrollbar-track": {
      background: 'hsla(0, 0%, 100%, 0)'
    },
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
  const { myId } = useSelector((state) => state.chat);

  return (
    <div className={`${classes.messageList} messageList`}>
      {messagesArray.map((message, i) => (
        <div
          key={i}
          className={`
            ${message.authorId === myId
              ? classes.userMessage
              : classes.senderMessage
            } ${classes.message}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
