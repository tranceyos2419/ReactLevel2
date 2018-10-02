import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRPC';


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle>
      {({ on, toggle }) => (
        <div>
          {on && <h1>show me</h1>}
          <button onClick={toggle}>Show/Hide</button>
        </div>
      )}
    </Toggle>
  </div>
);

export default App;
