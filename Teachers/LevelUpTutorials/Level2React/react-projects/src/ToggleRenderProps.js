import React, { Component } from 'react';

export default class ToggleRenderProps extends Component {
    state = {
      on: false,
    }

    toggle = () => {
      const { on } = this.state;
      this.setState({ on: !on });
    }

    render() {
      const { on } = this.state;
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
