import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatList from './ChatList';
import './styles/App.scss';


function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);

  const chatArray = [{
    chatName: 'Brunch this weekend?',
    id: 'Ali Connors',
    chatText: ` — I'll be in your neighborhood doing errands this…`
  },
  {
    chatName: 'Jake',
    id: 'Consectetur adipisicing elit. Possimus, nam.',
    chatText: ` — Wish I could come, but I'm out of town this…`
  },
  {
    chatName: 'Daine',
    id: 'Sunt ipsum quam aut unde optio! Atque.',
    chatText: ` — Do you have Paris recommendations? Have you ever…`
  },
  ];

  const onSendMessage = () => {
    const trimmedMessageText = inputMessage.trim();

    if (trimmedMessageText !== '') {
      setMessagesArray(prev => [...prev,
      {
        trimmedMessageText,
        author: 'Илья Алексин',
        time: new Date().toLocaleString()
      },
      ]);

      setInputMessage('');

      setTimeout(() => {
        setMessagesArray((prev) => [
          ...prev,
          {
            trimmedMessageText: 'Сообщение отправлено!😊👌',
            author: 'Chat-bot Василий',
            time: new Date().toLocaleString()
          },
        ]);
      }, 1500);
    };
  };

  return <div className='mainWrapper'>
    <ChatList chatArray={chatArray} />
    <div className='chatWrapper'>

      <MessageList messagesArray={messagesArray} />

      <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSendMessage={onSendMessage} />

    </div >
  </div>
};
export default App;
