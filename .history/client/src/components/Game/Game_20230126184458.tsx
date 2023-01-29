import React from 'react';
import { range } from '../../utils/range';

function Game() {
  const [correctWord, setCorrectWord] = React.useState('');

  const generateCorrectWord = async () => {
    const response = await fetch('http://localhost:5000/api');
    const words = await response.json();
    setCorrectWord(words[Math.floor(Math.random() * words.length)]);
  };
  React.useEffect(() => {
    generateCorrectWord();
  }, []);
  console.log(correctWord);
  return (
    <main className="flex items-center justify-center">
      <div>{range(6).map((row,idx) => {
        return <div key={idx}>{range(6).map((col) => {
          return <div key={col}>{correctWord}</div>;
        })}
      })}</div>
    </main>
  );
}

export default Game;
