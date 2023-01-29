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

function KeyBoard({
  guessedWords,
  setGuessedWords,
}: {
  guessedWords: string[];
  setGuessedWords: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [guess, setGuess] = React.useState('');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const key = (e.target as HTMLButtonElement).innerText;
    const guessedWordsCopy = [...guessedWords];
    let currentGuess =
      guessedWordsCopy[0] === undefined ? '' : guessedWordsCopy[0];
    setGuess(guess + key);
    if (key === 'enter' && guess.length === 5) {
      setGuessedWords([...guessedWords, guess]);
      setGuess('');
    }
    if (key === 'backspace') {
      setGuess(guess.slice(0, -1));
    }
    setGuessedWords([guess]);
  };
  return (
    <div className="flex flex-wrap gap-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={handleClick}
          value={key}
          className="h-14 bg-gray-200 flex-1 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded  items-center flex item-center justify-center"
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default KeyBoard;
