import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';

function Game({ correctWord }: { correctWord: string }) {
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    new Array(6).fill([])
  );
  const [letter, setLetter] = React.useState<string>('');
  const [currentRow, setCurrentRow] = React.useState(0);
  const [word, setWord] = React.useState<string>('');
  console.log(guessedWords);
  function handleKeyDown(event: Event) {
    const { key } = event as KeyboardEvent;
    setWord(word + key);
    const guessedWordsCopy = [...guessedWords];
    guessedWordsCopy[currentRow] = word;

    console.log(guessedWordsCopy);
  }
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="flex items-center justify-center ">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10">
        {guessedWords.map((row, rowIdx) => {
          return (
            <Row key={rowIdx}>
              {range(5).map((cellIdx) => (
                <Cell key={cellIdx} letter={row[cellIdx]} />
              ))}
            </Row>
          );
        })}
      </div>
    </main>
  );
}

export default Game;
