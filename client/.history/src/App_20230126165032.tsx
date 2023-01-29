import React from 'react';

const getWords = async () => {
  const response = await fetch(
    'https://api.frontendexpert.io/api/fe/wordle-words'
  );
  const words = await response.json();
  return words;
};

function App() {
  React.useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
