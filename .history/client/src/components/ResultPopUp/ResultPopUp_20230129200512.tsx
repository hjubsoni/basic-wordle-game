import React from 'react';

function ResultPopUp({
  guessedWords,
  correctWord,
}: {
  guessedWords: string[];
  correctWord: string;
}) {
  const status = guessedWords.includes(correctWord)
    ? 'Congratulations'
    : `You lost! The correct word was ${correctWord}`;
  return <p>{status}</p>;
}

export default ResultPopUp;