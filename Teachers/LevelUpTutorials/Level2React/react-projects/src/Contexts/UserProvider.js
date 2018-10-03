/* eslint react/no-unused-state: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Yoshi',
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{ user: this.state }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
