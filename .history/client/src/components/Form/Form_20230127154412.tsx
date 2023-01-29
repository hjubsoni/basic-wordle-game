import React from 'react';

interface FormProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  guessedWords: string[];
  setGuessedWords: React.Dispatch<React.SetStateAction<string[]>>;
  correctWord: string;
}

function Form({
  guess,
  setGuess,
  guessedWords,
  setGuessedWords,
  correctWord,
}: FormProps) {
  const [currentRow, setCurrentRow] = React.useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const guessedWordsCopy = [...guessedWords];
    guessedWordsCopy[currentRow] = guess;
    setGuessedWords(guessedWordsCopy);
    setGuess('');
    setCurrentRow(currentRow + 1);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <label htmlFor="guess" className="text-white">
        Enter guess:
      </label>
      <input
        className="border border-white rounded-lg"
        type="text"
        id="guess"
        name="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        required={true}
        min={'5'}
        max={'5'}
      />
    </form>
  );
}

export default Form;
