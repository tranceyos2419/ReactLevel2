import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToggleRenderProps from './ToggleRenderProps';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <ToggleRenderProps render={({ on, toggle }) => (
      <div>
        {on && <h1>Show me</h1>}
        <button onClick={toggle}>Show / Hide</button>
      </div>
    )}
    />
  </div>
);

export default App;
