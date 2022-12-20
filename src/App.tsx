import React from 'react';
import './App.css';
import { Card } from './components/organizms/card';
import { RepeatContainer } from './components/organizms/repeatContainer';

function App() {
  return (
    <div className="App App--container">
      <RepeatContainer />
      <Card/>
    </div>
  );
}

export default App;
