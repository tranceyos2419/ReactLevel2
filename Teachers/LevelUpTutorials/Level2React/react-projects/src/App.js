import React, { Fragment } from 'react';
import { Transition } from 'react-spring';
import './App.css';

//* I think I should use Elements
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
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

      <section>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Show/Hide</button>
              <Transition
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
              >
                {on && Header}

              </Transition>
            </Fragment>
          )}
        </Toggle>
      </section>

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

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1>Show me</h1>
  </Card>
);

export default App;
