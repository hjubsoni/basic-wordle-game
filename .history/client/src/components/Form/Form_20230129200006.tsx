import React from 'react';

function Form({
  handleSubmitGuess,
  guessedWords,
  setWarningMessage,
  correctWord,
}: {
  handleSubmitGuess: (guess: string) => void;
  guessedWords: string[];
  setWarningMessage: (warningMessage: boolean) => void;
  correctWord: string;
}) {
  const [possibleWords, setPossibleWords] = React.useState<string[]>(
    []
  );
  const [guess, setGuess] = React.useState('');

  const getPossibleWords = async () => {
    const response = await fetch('http://localhost:5000/api');
    const words = await response.json();
    setPossibleWords(words);
  };

  React.useEffect(() => {
    getPossibleWords();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (possibleWords.includes(guess)) {
      handleSubmitGuess(guess);
      setGuess('');
      setWarningMessage(false);
    }
    if (!possibleWords.includes(guess)) {
      setWarningMessage(true);
      setGuess('');
    }
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
        disabled={guessedWords.length === 6}
        autoComplete="off"
      />
    </form>
  );
}

export default Form;
