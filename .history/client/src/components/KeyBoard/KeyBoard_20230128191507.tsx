import React from 'react';

const keys = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'enter',
  'backspace',
];

function KeyBoard() {
  return (
    <div className="flex flex-wrap gap-4">
      {keys.map((key) => (
        <button
          key={key}
          className="bg-gray-200 flex-1 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default KeyBoard;
