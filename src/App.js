import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './App.scss';


function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);
  const [botMessagesArray, setBotMessagesArray] = useState([]);

  const onSendMessage = () => {
    const trimmedMessageText = inputMessage.trim();

    if (trimmedMessageText !== '') {
      setMessagesArray(prev => [...prev,
      {
        trimmedMessageText,
        author: 'Илья Алексин',
      },
      ]);
      setInputMessage('');
    };
  };

  useEffect(() => {
    if (messagesArray.length > 0) {
      setTimeout(() => {
        console.log('Сообщение отправлено!😊👌');

        setBotMessagesArray(() => [
          {
            botMessage: 'Сообщение отправлено!😊👌',
            author: 'Chat-bot Василий',
          },
        ]);
      }, 1500);
    };
  }, [botMessagesArray, messagesArray.length]);

  return <div className='mainWrapper'>

    <MessageList messagesArray={messagesArray} botMessagesArray={botMessagesArray} />

    <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSendMessage={onSendMessage} />

  </div >
};
export default App;
