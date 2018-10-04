import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//* I think I should use relative path.
import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

const Modal = ({ children, on, toggle }) => (
    <Portal>
        {on ? (
            <ModalWrapper>
                <ModalCard>
                    <CloseButton onClick={toggle}>
                        <Icon name="close" />
                    </CloseButton>
                    <div>{children}</div>
                </ModalCard>
                <Background onClick={toggle} />
            </ModalWrapper>
        ) : <div />}

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

const Background = styled.div`
${absolute({})}
width: 100%;
height:100%;
background:black;
opacity:0.5;
`;
