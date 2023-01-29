import React from 'react';

interface Styles {
  [key: string]: string;
}
function Cell({
  currentChar,
  status,
}: {
  currentChar: string;
  status: string;
}) {
  let styles;
  switch (status) {
    case 'correct':
      styles = 'bg-green-500';
      break;
    case 'misplaced':
      styles = 'bg-yellow-500';
      break;
    default:
      styles = 'bg-gray-500';
      break;
  }
  return (
    <div
      className={`${styles} border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center`}
    >
      {currentChar}
    </div>
  );
}

export default Cell;
