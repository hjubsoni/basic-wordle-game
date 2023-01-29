import React from 'react';

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
    case 'incorrect':
      styles = 'bg-gray-500';
      break;
    default:
      styles = 'bg-slate-900';
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
