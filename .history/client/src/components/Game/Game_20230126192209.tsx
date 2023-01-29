import React from 'react';
import { range } from '../../utils/range';
import Cell from '../Cell';
import Row from '../Row';

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
          <Row key={rowIdx}>
            {range(5).map((cellIdx) => (
              <Cell key={cellIdx} />
            ))}
          </Row>
        ))}
      </div>
    </main>
  );
}

export default Game;
