/* eslint import/prefer-default-export:0 */
import styled from 'styled-components';
import { colors, transition, elevation } from 'Utilities';

export const Card = styled.div`
color:${colors.purp};
background: white;
border-radius: 5px;
padding:15px;
box-shadow:2px 2px 10px rgba(0,0,0,0.3);
${transition({
    property: 'box-shadow',
  })}
${elevation[2]};
/* & means parent element */
&:hover{
    ${elevation[5]};
}
`;
