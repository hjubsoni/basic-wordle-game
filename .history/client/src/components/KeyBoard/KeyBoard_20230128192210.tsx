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
  const [guess, setGuess] = React.useState('');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { target } = e;
    if (target.value === 'enter') {
      console.log('enter');
    }
  };
  return (
    <div className="flex flex-wrap gap-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={handleClick}
          className="h-14 bg-gray-200 flex-1 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded  items-center flex item-center justify-center"
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default KeyBoard;
