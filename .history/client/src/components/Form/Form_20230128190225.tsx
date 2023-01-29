import React from 'react';

function Form({
  handleSubmitGuess,
  guessedWords,
}: {
  handleSubmitGuess: (guess: string) => void;
  guessedWords: string[];
}) {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess('');
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
        className="border border-blue-200 rounded-2xl px-2 h-12 w-full text-2xl"
        type="text"
        id="guess"
        name="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required={true}
        minLength={5}
        maxLength={5}
        disabled={}
        autoComplete="off"
      />
    </form>
  );
}

export default Form;
