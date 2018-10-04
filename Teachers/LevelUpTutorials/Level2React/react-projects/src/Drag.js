import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import styled from 'styled-components';
import { absolute } from 'Utilities';
import { Card } from './Elements/Cards';

const maxWith = '200px';

export default class Drag extends Component {
  // if I write function like this, it is not executed when it's called
  onUp = xDelta => () => {
    console.log(xDelta);
    if (xDelta < -300) {
      alert('Remove Card');
    } else if (xDelta > 300) {
      alert('Add Card');
    }
  }

  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (

          <Spring
            native
            to={{
              x: down ? xDelta : 0,
            }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <ModalWrapper>
                <CardContainer
                  maxWith={maxWith}
                  style={{
                    background: x.interpolate({
                      range: [-300, 300],
                      output: ['#fff323', '#9A3D02'],
                      extrapolate: 'clamp',
                    }),
                  }}
                >
                  <DragCard
                    onMouseUp={this.onUp(xDelta)} // for desktop
                    onTouchEnd={this.onUp(xDelta)} // for mobile
                    maxWith={maxWith}
                    style={{
                      opacity: x.interpolate({
                        range: [-300, 300],
                        output: [0.5, 1],
                        extrapolate: 'clamp',
                      }),
                      // in the array, the first x goes as position x, the second x goes as rotate value rotate, both x come from  <Spring>
                      transform: interpolate(
                        [x,
                          x.interpolate({
                            range: [-300, 300],
                            output: [-360, 360],
                            extrapolate: 'clamp',
                          })],
                        (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`),
                    }}
                  >
                    <h1>Drag me</h1>
                  </DragCard>
                </CardContainer>
              </ModalWrapper>
            )}
          </Spring>

        )}
      </Gesture>

    );
  }
}

const NativeCard = Card.withComponent(animated.div);

const DragCard = NativeCard.extend`
max-width:${props => props.maxWith};
margin: 0 auto;
height: 50px;
`;

const ModalWrapper = styled.div`
${absolute({})}
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
            `;


const CardContainer = styled(animated.div)`
position:relative;
background:#ccc;
max-width:${props => props.maxWith};
margin:0 auto;
border-radius:5px;`;


{ /* <Gesture>
{({
  down, x, y, xDelta, yDelta, xInitial, yInitial,
}) => (
    <CardWithMaxWidth style={{
      transform: `translate3d(${xDelta}px, ${yDelta}px,0)`,
    }}
    >
      <h1>
        {down}
        ,
{x}
        ,
{y}
        ,
{xDelta}
        ,
{yDelta}
        ,
{xInitial}
        ,
{yInitial}
      </h1>
    </CardWithMaxWidth>
)}
</Gesture> */ }
