import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-spring';

//* I think I should use relative path.
import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';


const Modal = ({ children, on, toggle }) => (
    <Portal>
        <Transition
          from={{ opacity: 0, y: -50, bgOpacity: 0 }}
          enter={{ opacity: 1, y: 0, bgOpacity: 0.5 }}
          leave={{ opacity: 0, y: 50, bgOpacity: 0 }}
        >
            {/* can't write ? because transition expects function  */}
            {on && (styles => (
                <ModalWrapper>
                    <ModalCard style={
                        {
                          //   ...styles,
                          opacity: styles.opacity,
                          transform: `translate3d(0,${styles.y}px, 0)`,
                        }}
                    >
                        <CloseButton onClick={toggle}>
                            <Icon name="close" />
                        </CloseButton>
                        <div>{children}</div>
                    </ModalCard>
                    <Background onClick={toggle} theme={styles.bgOpacity} />
                    {/* <Background onClick={toggle} style={{ opacity: styles.bgOpacity }} /> */}
                </ModalWrapper>

            ))}
        </Transition>
    </Portal>
);

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const ModalWrapper = styled.div`
${absolute({})}
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            `;

const ModalCard = Card.extend`
            position:relative;
            min-width:200px;
            z-index:10;
            margin-bottom:100px;
            `;

const CloseButton = styled.button`
${absolute({ x: 'right' })}
            border:none;
            background:transparent;
            padding:10px;
            `;

//! Styles which will be duplicated should be added as props into styled-component
const Background = styled.div`
${absolute({})}
            width: 100%;
            height:100%;
            background:black;
        opacity:${props => props.theme};
                /* opacity:0.5; */
                `;
