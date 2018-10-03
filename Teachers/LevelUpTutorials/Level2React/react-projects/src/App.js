import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle, Modal } from './Utilities/index';


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          <button onClick={toggle}>Login</button>
          <Modal on={on} toggle={toggle}>
            <h1>stil in modal</h1>
          </Modal>
        </Fragment>
      )}
    </Toggle>
  </div>
);

export default App;
