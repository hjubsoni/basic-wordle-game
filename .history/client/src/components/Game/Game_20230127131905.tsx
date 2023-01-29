import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';

function Game({ correctWord }: { correctWord: string }) {
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    new Array(6).fill('')
  );

  function handleKeyDown(event: Event) {
    const { key } = event as KeyboardEvent;
    if (key > 'z' || key < 'a') return;
  }
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  console.log(correctWord);
  return (
    <main className="flex items-center justify-center ">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10">
        {guessedWords.map((row, rowIdx) => {
          const singleWord = row.split('');
          return (
            <Row key={rowIdx}>
              {range(5).map((cellIdx) => (
                <Cell
                  key={cellIdx}
                  singleWord={singleWord[cellIdx]}
                />
              ))}
            </Row>
          );
        })}
      </div>
    </main>
  );
}

export default Game;
