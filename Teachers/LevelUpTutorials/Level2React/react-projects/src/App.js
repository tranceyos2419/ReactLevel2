import React, { Fragment } from 'react';
import { Transition } from 'react-spring';
import './App.css';

//* I think I should use Elements
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import { UserProvider } from 'Contexts';

import User from './User';

import logo from './logo.svg';
import Drag from './Drag';


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
                from={{ opacity: 0, height: '0px', bg: '#ffab00' }}
                enter={{ opacity: 1, height: '200px', bg: '#900203' }}
                leave={{ opacity: 0, height: '0px', bg: '#ffab00' }}
              >
                {on && Header}
              </Transition>
            </Fragment>
          )}
        </Toggle>
      </section>

      <section>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>User</button>
              <Modal on={on} toggle={toggle}>
                <Fragment>
                  <User />
                </Fragment>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </section>

      <section>
        <Drag />
      </section>

    </UserProvider>
  </div>
);

const Header = styles => (
  // <Card style={{ ...styles }}>
  <Card style={{
    opacity: styles.opacity,
    height: styles.height,
    overflow: 'hidden',
    background: styles.bg,
  }}
  >
    <h1>Show me</h1>
    {/* <h3>{styles.opacity}</h3> */}
    <h3>{styles.bg}</h3>
  </Card>
);

export default App;
