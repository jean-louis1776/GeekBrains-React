import React, { useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatList from './ChatList';
import firstAvatar from '../img/1.jpg';
import secondAvatar from '../img/2.jpg';
import thirdAvatar from '../img/3.jpg';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './chatSlice'

function Chat() {
  // const [messagesArray, setMessagesArray] = useState([]);

  const dispatch = useDispatch();
  const { messagesArray } = useSelector(state => state.chat);

  const chatArray = [{
    avatar: firstAvatar,
    chatName: 'Brunch this weekend?',
    id: 'Ali Connors',
    chatText: ` — I'll be in your neighborhood doing errands this…`
  },
  {
    avatar: secondAvatar,
    chatName: 'Summer BBQ',
    id: 'to Scott, Alex, Jennifer',
    chatText: ` — Wish I could come, but I'm out of town this…`
  },
  {
    avatar: thirdAvatar,
    chatName: 'Oui Oui',
    id: 'Sandra Adams',
    chatText: ` — Do you have Paris recommendations? Have you ever…`
  },
  ];

  const onSendMessage = (messageText) => {
    const trimmedMessageText = messageText.trim();

    if (trimmedMessageText !== '') {
      dispatch(addMessage({
        trimmedMessageText,
        author: 'Илья Алексин',
        time: new Date().toLocaleString()
      }));

      setTimeout(() => {
        dispatch(addMessage({
          trimmedMessageText: 'Сообщение отправлено!😊👌',
          author: 'Chat-bot Василий',
          time: new Date().toLocaleString()
        }));
      }, 1000);
    };
  };

  useEffect(() => {
    document.getElementsByClassName("messageList")[0].scrollTop = 999999;
  });

  return (
    <div className='mainWrapper'>
      <div className='componentWrapper'>
        <ChatList chatArray={chatArray} />

        <div className='chatWrapper'>

          <MessageList messagesArray={messagesArray} />

          <MessageInput onSendMessage={onSendMessage} />

        </div >
      </div>
    </div>
  );
};
export default Chat;
