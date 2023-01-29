import React from 'react';

function Cell({ rowId, cellId }: { rowId: number; cellId: number }) {
  console.log(rowId, cellId);
  return (
    <div
      id={cellId.toString()}
      className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center"
    >
      Cell
    </div>
  );
}

export default Cell;
