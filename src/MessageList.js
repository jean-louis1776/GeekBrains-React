import './MessageList.scss';

const MessageList = ({ messagesArray, botMessagesArray }) => {
    return (
        <div className="messageList">
            {
                messagesArray.map((message, i) => (
                    <>
                        <div className='myMessageBlock'>
                            <div className='myMessageTag'>{message.author}</div>
                            <div key={i} className='myMessage'>{message.trimmedMessageText}</div>
                        </div>
                    </>
                ))
            }
            {
                botMessagesArray.map((messageBot, i) => (
                    <>
                        <div className='botMessageBlock'>
                            <div className='botMessageTag'>{messageBot.author}</div>
                            <div key={i} className='botMessage'>{messageBot.botMessage}</div>
                        </div>
                    </>
                ))
            }
        </div>
    );
};

export default MessageList;