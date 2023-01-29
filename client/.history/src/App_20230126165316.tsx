import React from 'react';

function App() {
  const [correctWord, setCorrectWord] = React.useState('');

  const getWords = async () => {
    const response = await fetch(
      'https://api.frontendexpert.io/api/fe/wordle-words'
    );
    const words = await response.json();
    setCorrectWord(words[Math.floor(Math.random() * words.length)]);
  };
  React.useEffect(() => {
    const words = a;
  }, []);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
