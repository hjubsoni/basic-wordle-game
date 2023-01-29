import React from 'react';

interface Styles {
  [key: string]: string;
}

interface FormProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  guessedWords: string[];
  setGuessedWords: React.Dispatch<React.SetStateAction<string[]>>;
  correctWord: string;
  styles: Styles;
  setStyles: React.Dispatch<React.SetStateAction<Styles>>;
}

function Form({
  guess,
  setGuess,
  guessedWords,
  setGuessedWords,
  correctWord,
  styles,
  setStyles,
}: FormProps) {
  const [currentRow, setCurrentRow] = React.useState(0);

  const chechGuess = (guess: string, correctWord: string) => {
    for (let i = 0; i < guess.length; i++) {
      let b = guess[i];

      if (b === correctWord[i]) {
        setStyles({ ...styles, b: 'green' });
      } else if (correctWord.includes(b)) {
        setStyles({ ...styles, b: 'yellow' });
      } else {
        setStyles({ ...styles, b: 'grey' });
      }
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentRow === 6) return;
    const guessedWordsCopy = [...guessedWords];
    guessedWordsCopy[currentRow] = guess;
    chechGuess(guess, correctWord);
    setGuessedWords(guessedWordsCopy);
    setGuess('');
    setCurrentRow(currentRow + 1);
  };
  console.log(guess);
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
        onChange={(e) => setGuess(e.target.value)}
        required={true}
        minLength={5}
        maxLength={5}
        autoComplete="off"
        disabled={currentRow === 6}
      />
    </form>
  );
}

export default Form;
