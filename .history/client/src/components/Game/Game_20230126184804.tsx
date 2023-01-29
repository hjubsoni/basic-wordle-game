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
      <div>
        {range(6).map((rowIdx) => (
          <div key={rowIdx} className="w-8 h-8 bg-white">
            {range(5).map((cellIdx) => (
              <div key={cellIdx}></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Game;
