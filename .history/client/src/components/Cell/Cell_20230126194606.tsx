import React from 'react';

function Cell({ cellId }: { cellId: string }) {
  return (
    <div
      id={cellId}
      className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center"
    >
      Cell
    </div>
  );
}

export default Cell;
