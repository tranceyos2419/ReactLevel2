import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from './Portal';


export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props;
    return (
            <Portal>
                {on ? (
                    <ModalWrapper>
                        <button onClick={toggle}>Cancel</button>
                        <div>{children}</div>
                    </ModalWrapper>
                ) : <div />}

            </Portal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const ModalWrapper = styled.div`
position:absolute;
top: 0;
left: 0;
width:100%;
height:100%;
background: teal;
`;
