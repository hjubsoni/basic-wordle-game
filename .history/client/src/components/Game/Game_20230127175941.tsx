import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';
import Form from '../Form';

interface Styles {
  [key: string]: string;
}

function Game() {
  const [correctWord, setCorrectWord] = React.useState('');
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    new Array(6).fill('')
  );
  const [guess, setGuess] = React.useState<string>('');
  const [styles, setStyles] = React.useState<Styles>({});

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
    <main className="flex items-center justify-center flex-col gap-8 p-4 max-w-sm  mx-auto">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10 ">
        {guessedWords.map((row, rowIdx) => {
          return (
            <Row key={rowIdx}>
              {range(5).map((_, cellIdx) => (
                <Cell key={cellIdx} letter={row[cellIdx]} />
              ))}
            </Row>
          );
        })}
      </div>

      <Form
        guess={guess}
        setGuess={setGuess}
        guessedWords={guessedWords}
        setGuessedWords={setGuessedWords}
        correctWord={correctWord}
        styles={styles}
        setStyles={setStyles}
      />
    </main>
  );
}

export default Game;
