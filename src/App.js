import React, { useState } from 'react';
import './App.scss';
import Message from './Message';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <h1>HomeWork №1</h1>

      <p>🔽Write your message here🔽</p>

      <input className="Input" value={inputText} onChange={(e) => setInputText(e.target.value)} />

      <Message textToShow={inputText} />
    </div>
  );
}

export default App;
