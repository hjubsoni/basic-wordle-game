import React from 'react';

function Cell({ singleWord }: { singleWord: string }) {
  return (
    <div className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center">
      {singleWord}
    </div>
  );
}

export default Cell;
