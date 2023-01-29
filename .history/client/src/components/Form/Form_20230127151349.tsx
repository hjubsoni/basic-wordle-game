import React from 'react';

interface FormProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  guessedWords: string[];
  setGuessedWords: React.Dispatch<React.SetStateAction<string[]>>;
  correctWord: string;
}

function Form({ guess, setGuess }: FormProps) {
  return (
    <form>
      <label htmlFor="guess">Enter guess:</label>
      <input type="text" id="guess" name="guess" value={guess} />
    </form>
  );
}

export default Form;
