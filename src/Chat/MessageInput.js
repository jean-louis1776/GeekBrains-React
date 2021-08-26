import '../styles/styles.css';
import { useState } from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
    input: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 300,
        width: '90%',
        margin: '0 15px 15px 15px',
    },
    sendButton: {
        margin: "0px 10px",
    },
    fileInput: {
        display: 'none',
    },
}));

const MessageInput = ({ onSendMessage }) => {

    const classes = useStyles();

    const [inputMessage, setInputMessage] = useState('');

    const sendAndRemoveInput = () => {
        onSendMessage(inputMessage);
        setInputMessage('');
    };

    return (
        <div className="inputWrapper">
            <TextField
                id="standard-multiline-flexible"
                label="Введите сообщение..."
                multiline
                maxRows={3}
                className={classes.input}
                value={inputMessage}
                autoFocus={true}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (!e.shiftKey && e.key === 'Enter') {
                        e.preventDefault();
                        sendAndRemoveInput();
                    }
                }}
            />
            <div className={classes.root}>
                <input accept="files/*" className={classes.fileInput} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <AttachFileIcon />
                    </IconButton>
                </label>
            </div>
            <IconButton
                aria-label="send"
                color="primary"
                className={classes.sendButton}
                onClick={sendAndRemoveInput}
            >
                <Send />
            </IconButton>
        </div >
    );
};

MessageInput.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;