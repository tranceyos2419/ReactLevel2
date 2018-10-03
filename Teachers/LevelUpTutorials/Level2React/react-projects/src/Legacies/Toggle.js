import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
    state = {
      on: false,
    }

    toggle = () => {
      const { on } = this.state;
      this.setState({ on: !on });
    }

    render() {
      const { on } = this.state;
      const { children } = this.props;
      return (
            <div>
                {on && children}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
      );
    }
}


Toggle.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};
