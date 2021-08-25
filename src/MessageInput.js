import './styles/MessageInput.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
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
}));

const MessageInput = ({ inputMessage, setInputMessage, onSendMessage }) => {

    const classes = useStyles();

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
                        onSendMessage();
                    }
                }}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.sendButton}
                endIcon={<Send>send</Send>}
                onClick={onSendMessage}
            >
                Отправить
            </Button>
        </div>
    );
};

export default MessageInput;