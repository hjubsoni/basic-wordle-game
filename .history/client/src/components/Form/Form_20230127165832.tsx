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
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center flex-col w-full"
    >
      <label htmlFor="guess" className="text-white text-2xl">
        Enter guess:
      </label>
      <input
        className="border border-blue-200 rounded-xl px-2 h-12 w-full"
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
