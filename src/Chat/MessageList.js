import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../styles/styles.css';
import PropTypes from 'prop-types';

const MessageList = ({ messagesArray }) => {
    const scrollableNodeRef = React.createRef();

    return (
        <div className="messageList">
            <SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef }} style={{ height: '100%', width: '100%' }}>
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
            </SimpleBar>
        </div >
    );
};

MessageList.propTypes = {
    messagesArray: PropTypes.array.isRequired,
};

export default MessageList;