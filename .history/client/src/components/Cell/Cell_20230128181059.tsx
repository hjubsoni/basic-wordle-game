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
  const checkGuess = (currentChar: string, correctWord: string) => {
    if (!currentChar) return;
    const chars = currentChar.split('');
    return chars.map((char, idx) => {
      let status;
      if (char === correctWord[idx]) {
        status = 'correct';
      } else if (correctWord.includes(char)) {
        status = 'misplaced';
      } else {
        status = 'incorrect';
      }
      return {
        letter: currentChar,
        status,
      };
    });
  };

  const result = checkGuess(currentChar, correctWord);
  console.log(result);
  return (
    <div className="border border-white flex-1 aspect-square rounded-lg text-white text-3xl uppercase flex items-center justify-center">
      {currentChar ? currentChar : undefined}
    </div>
  );
}

export default Cell;
