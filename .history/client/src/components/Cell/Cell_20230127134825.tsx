import React from 'react';

function Cell({ letter }: { letter: string }) {
  return (
    <div className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center">
      {letter}
    </div>
  );
}

export default Cell;
