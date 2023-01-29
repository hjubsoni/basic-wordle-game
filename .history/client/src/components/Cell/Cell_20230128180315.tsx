import React from 'react';
interface Styles {
  [key: string]: string;
}
function Cell({
  currentChar,
  correctWord,
}: {
  currentChar: string;
  correctWord: string;
}) {
  return (
    <div className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center">
      {currentChar ? currentChar : undefined}
    </div>
  );
}

export default Cell;
