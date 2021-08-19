import './MessageInput.scss';
import sendButtonImg from './send_message.svg';

const MessageInput = ({ inputMessage, setInputMessage, onSendMessage }) => {

    return (
        <div className="inputWrapper">
            <input
                className='input'
                placeholder='Введите сообщение...'
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        onSendMessage();
                    }
                }}
            />
            <button className='sendButton' onClick={onSendMessage}>
                <img src={sendButtonImg} alt="send-message" />
            </button>
        </div>
    );
};

export default MessageInput;