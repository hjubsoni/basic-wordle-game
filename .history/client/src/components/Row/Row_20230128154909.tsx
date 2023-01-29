import React from 'react';
import { range } from '../../utils/range';
import Cell from '../Cell';

function Row({ currentWord }: { currentWord: string }) {
  return (
    <div className="flex gap-4">
      {range(5).map((_, cellIdx) => {
        <Cell currentChar={currentWord[cellIdx]} />;
      })}
    </div>
  );
}

export default Row;
