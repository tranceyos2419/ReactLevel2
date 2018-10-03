import { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class ToggleRPC extends Component {
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
      return children({
        on,
        toggle: this.toggle,
      });
    }
}

ToggleRPC.propTypes = {
  children: PropTypes.func.isRequired,
};
