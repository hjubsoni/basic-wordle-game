import React from 'react';

function App() {
  const [correctWord, setCorrectWord] = React.useState('');

  const generateCorrectWord = async () => {
    const response = await fetch('api/wordle-words');
    const words = await response.json();
    setCorrectWord(words[Math.floor(Math.random() * words.length)]);
  };
  React.useEffect(() => {
    generateCorrectWord();
  }, []);
  console.log(correctWord);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
