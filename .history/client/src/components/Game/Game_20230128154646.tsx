import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Form from '../Form';

interface Styles {
  [key: string]: string;
}

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

  const handleSubmitGuess = (guess: string) => {
    setGuessedWords([...guessedWords, guess]);
  };

  return (
    <main className="flex items-center justify-center flex-col gap-8 p-4 max-w-sm  mx-auto">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10 ">
        {range(6).map((_, rowIdx) => (
          <Row key={rowIdx} currentWord={guessedWords[rowIdx]} />
        ))}
      </div>

      <Form handleSubmitGuess={handleSubmitGuess} />
    </main>
  );
}

export default Game;
