import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class ToggleRenderProps extends Component {
    state = {
      on: true,
    }

    toggle = () => {
      const { on } = this.state;
      this.setState({ on: !on });
    }

    render() {
      const { on } = this.state;
      const { render } = this.props;
      return (
            <div>
                {render({
                  on,
                  toggle: this.toggle,
                })}
            </div>
      );
    }
}

ToggleRenderProps.propTypes = {
  render: PropTypes.func.isRequired,
};
