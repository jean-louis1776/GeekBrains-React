import '../styles/styles.css';
import PropTypes from 'prop-types';

const MessageList = ({ messagesArray }) => {
    return (
        <div className="messageList">
            {
                messagesArray.map((message, i) => {
                    const isMessageFromBot = message.author === 'Chat-bot Василий';

                    return (
                        <div className={isMessageFromBot ? 'botMessageBlock' : 'myMessageBlock'} key={i}>
                            <div className={isMessageFromBot ? 'botMessageTag' : 'myMessageTag'}>{message.author} <br /> {message.time}</div>
                            <div className={isMessageFromBot ? 'botMessage' : 'myMessage'} > {message.trimmedMessageText}</div>
                        </div >
                    )
                })
            }
        </div >
    );
};

MessageList.propTypes = {
    messagesArray: PropTypes.array.isRequired,
};

export default MessageList;