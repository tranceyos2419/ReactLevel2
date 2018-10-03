import React, { Fragment } from 'react';
import './App.css';

//* I think I should use Elements
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';

import logo from './logo.svg';

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
