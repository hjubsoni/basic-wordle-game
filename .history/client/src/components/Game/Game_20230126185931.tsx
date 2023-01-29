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
    <main className="flex items-center justify-center h-full">
      <div className="flex gap-4 flex-col max-w-xl w-full">
        {range(6).map((rowIdx) => (
          <div key={rowIdx} className=" flex gap-4">
            {range(5).map((cellIdx) => (
              <div
                key={cellIdx}
                className="border border-white flex-1 aspect-square"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Game;
