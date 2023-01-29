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
    const chars = currentWord.split('');
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
        letter: currentWord,
        status,
      };
    });
  };

  const result = checkGuess(currentWord, correctWord);
  console.log(result);
  return (
    <div className="flex gap-4">
      {range(5).map((_, cellIdx) => {
        return (
          <Cell key={cellIdx} currentChar={currentWord[cellIdx]} />
        );
      })}
    </div>
  );
}

export default Row;
