import React from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from './Elements/Cards';

const Drag = () => (
  <Gesture>
    {({ down, xDelta }) => (

      <Spring
        to={{
          x: down ? xDelta : 0,
        }}
        immediate={name => down && name === 'x'}
      >
        {({ x }) => (
          <CardWithMaxWidth style={{ transform: `translatex(${x}px)` }}>
            <h1>Drag me</h1>
          </CardWithMaxWidth>
        )}
      </Spring>

    )}
  </Gesture>
);

export default Drag;

const CardWithMaxWidth = Card.extend`
max-width:320px;
margin: 0 auto;
`;

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
