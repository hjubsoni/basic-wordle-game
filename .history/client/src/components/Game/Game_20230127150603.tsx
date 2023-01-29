import React from 'react';
import { range } from '../../utils/range';
import Row from '../Row';
import Cell from '../Cell';
import Form from '../Form';

function Game({ correctWord }: { correctWord: string }) {
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    new Array(6).fill('')
  );
  const [guess, setGuess] = React.useState<string>('');

  return (
    <main className="flex items-center justify-center ">
      <div className="flex gap-4 flex-col max-w-sm w-full rouded-lg mt-10">
        {guessedWords.map((row, rowIdx) => {
          const b = row[0];
          return (
            <Row key={rowIdx}>
              {range(5).map((_, cellIdx) => (
                <Cell key={cellIdx} letter={b[0]} />
              ))}
            </Row>
          );
        })}
      </div>
      <Form guess={guess} setGuess={setGuess} />
    </main>
  );
}

export default Game;
