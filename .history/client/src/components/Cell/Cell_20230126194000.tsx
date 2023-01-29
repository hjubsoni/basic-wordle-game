import React from 'react';

function Cell({ cell }: { cell: number }) {
  return (
    <div className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center">
      Cell
    </div>
  );
}

export default Cell;
