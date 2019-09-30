import React from 'react';
import './App.css';

// Import components
import Search from './components/Search.js';
import Players from './components/Players.js';

function App() {
  return (
    <div className="App">
      <Search />
      <Players />
    </div>
  );
}

export default App;
