import React from 'react';

interface FormProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  guessedWords: string[];
  setGuessedWords: React.Dispatch<React.SetStateAction<string[]>>;
  correctWord: string;
}

function Form({ guess, setGuess }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter guess:</label>
      <input
        type="text"
        id="guess"
        name="guess"
        value={guess}
        required={true}
        min={5}
        max={5}
      />
    </form>
  );
}

export default Form;
