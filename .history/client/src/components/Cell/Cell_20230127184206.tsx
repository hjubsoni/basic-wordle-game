import React from 'react';
interface Styles {
  [key: string]: string;
}
function Cell({
  letter,
  styles,
}: {
  letter: string;
  styles: Styles;
}) {
  console.log(letter);
  return (
    <div className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center">
      {letter}
    </div>
  );
}

export default Cell;
