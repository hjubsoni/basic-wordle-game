import React from 'react';
import { range } from '../../utils/range';
import Cell from '../Cell';

function Row({
  currentWord,
  correctWord,
}: {
  currentWord: string;
  correctWord: string;
}) {
  const checkGuess = (currentWord: string, correctWord: string) => {
    if (!currentWord) return;
    const chars = currentWord.toUpperCase().split('');
    return chars.map((char, idx) => {
      let status;
      if (char === correctWord[idx]) {
        status = 'correct';
      } else if (correctWord.includes(char)) {
        status = 'misplaced';
      } else {
        status = 'incorrect';
      }
      return {
        letter: currentWord[idx],
        status,
      };
    });
  };

  const result = checkGuess(currentWord, correctWord);

  return (
    <div className="flex gap-4">
      {range(5).map((_, cellIdx) => {
        const status = result ? result[cellIdx].status : '';
        return (
          <Cell
            key={cellIdx}
            currentChar={currentWord[cellIdx]}
            status={status}
          />
        );
      })}
    </div>
  );
}

export default Row;
