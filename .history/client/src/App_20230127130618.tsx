import React from 'react';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  const [correctWord, setCorrectWord] = React.useState('');

  const generateCorrectWord = async () => {
    const response = await fetch('http://localhost:5000/api');
    const words = await response.json();
    setCorrectWord(words[Math.floor(Math.random() * words.length)]);
  };

  React.useEffect(() => {
    generateCorrectWord();
  }, []);
  return (
    <div className="h-full">
      <Header />
      <Game correctWord={correctWord} />
    </div>
  );
}

export default App;
