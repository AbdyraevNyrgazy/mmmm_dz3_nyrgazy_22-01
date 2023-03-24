import './App.css';
import React, { useState } from 'react';

function Button(props) {
  const [text, setText] = useState(props.initialText);

  function handleClick() {
    setText(props.updatedText);
  }

  return (
      <button onClick={handleClick}>
        {text}
      </button>
  );
}

function App() {
  return (
      <div>
        <Button initialText="Нажми меня!" updatedText="Спасибо за нажатие!" />
        <Button initialText="Кликни на меня!" updatedText="Отлично, ты кликнул!" />
      </div>
  );
}
export default App
