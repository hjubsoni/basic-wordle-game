import React from 'react';
import { range } from '../../utils/range';

function Game() {
  const [correctWord, setCorrectWord] = React.useState('');
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    []
  );

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
    <main className="flex items-center justify-center ">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10">
        {range(6).map((rowIdx) => (
          <div key={rowIdx} className=" flex gap-4">
            {range(5).map((cellIdx) => (
              <div
                key={cellIdx}
                className="border border-white flex-1 aspect-square rounded-lg text-white text-2xl flex items-center justify-center"
              >
                k
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Game;
