import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';

function Game({ correctWord }: { correctWord: string }) {
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    new Array(6).fill('')
  );
  const [currentRow, setCurrentRow] = React.useState(0);
  console.log(guessedWords);

  function handleKeyDown(event: Event) {
    const { key } = event as KeyboardEvent;
    const guessedWordsCopy = [...guessedWords];
    let splittedWord = guessedWordsCopy[currentRow].split('');

    splittedWord.push(key);
    setGuessedWords(guessedWordsCopy);
  }
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

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
