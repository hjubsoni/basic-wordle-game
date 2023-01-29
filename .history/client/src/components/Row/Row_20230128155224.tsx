import React from 'react';
import { range } from '../../utils/range';
import Cell from '../Cell';

function Row({ currentWord }: { currentWord: string | undefined }) {
  return (
    <div className="flex gap-4">
      {range(5).map((_, cellIdx) => {
        const currentChar =
          currentWord?[cellIdx] !== undefined
            ? currentWord[cellIdx]
            : undefined;
        return <Cell currentChar={currentChar} />;
      })}
    </div>
  );
}

export default Row;
