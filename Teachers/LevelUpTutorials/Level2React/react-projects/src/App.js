import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './Toggle';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle>
      <h2>Children</h2>
    </Toggle>
  </div>
);

export default App;
