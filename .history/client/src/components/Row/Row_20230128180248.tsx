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
  return (
    <div className="flex gap-4">
      {range(5).map((_, cellIdx) => {
        return (
          <Cell
            key={cellIdx}
            currentChar={currentWord[cellIdx]}
            correctWord={correctWord}
          />
        );
      })}
    </div>
  );
}

export default Row;
