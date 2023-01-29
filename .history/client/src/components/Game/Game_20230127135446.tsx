import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';

function Game({ correctWord }: { correctWord: string }) {
  const [guessedWords, setGuessedWords] = React.useState<string[][]>(
    new Array(6).fill([])
  );
  const [currentRow, setCurrentRow] = React.useState(0);
  console.log(guessedWords);
  function handleKeyDown(event: Event) {
    const { key } = event as KeyboardEvent;
    const guessedWordsCopy = [...guessedWords];
    guessedWordsCopy[currentRow] = [
      ...guessedWordsCopy[currentRow][4]
      key,
    ];
    setGuessedWords(guessedWordsCopy);
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