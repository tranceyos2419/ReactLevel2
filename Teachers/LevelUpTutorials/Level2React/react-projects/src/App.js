import React, { Fragment } from 'react';
import './App.css';

//* I think I should use Elements
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import { UserProvider } from 'Contexts';

import User from './User';

import logo from './logo.svg';


const App = () => (
  <div className="App">
    <UserProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>User</button>
            <Modal on={on} toggle={toggle}>
              <User />
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </UserProvider>
  </div>
);

export default App;
