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
      <div className="flex gap-4">
        {range(5).map((rowIdx) => (
          <div key={rowIdx} className="w-8 h-8 border border-white">
            {range(6).map((cellIdx) => (
              <div
                key={cellIdx}
                className="w-8 h-8 border border-white mt-4"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Game;
