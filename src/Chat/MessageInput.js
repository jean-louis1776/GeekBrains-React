import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import { Send } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "0px 15px 15px 15px",
    width: "95%",
  },

  button: {
    margin: "0px 10px",
  },

  inputWrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflowX: 'clip'
  },
}));

const MessageInput = ({ onSendMessage }) => {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState("");

  const sendAndRemoveInput = () => {
    const trimmedMessageText = inputMessage.trim();
    if (trimmedMessageText !== "") {
      onSendMessage(trimmedMessageText);
      setInputMessage("");
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <TextField
        value={inputMessage}
        label="Введите сообщение..."
        multiline
        maxRows={3}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={(e) => {
          if (!e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            sendAndRemoveInput();
          }
        }}
        classes={{
          root: classes.input,
        }}
      />
      <IconButton
        aria-label="send"
        color="primary"
        className={classes.button}
        onClick={sendAndRemoveInput}
      >
        <Send />
      </IconButton>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
