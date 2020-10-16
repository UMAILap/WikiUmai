import React from 'react';
import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

const StyledH2 = styled.h2`
font-size: 20px;
  font-style: bold;
  color: ${leerColor(colores.violeta)};
  color: ${props => (props.isColorPink ? leerColor(colores.rosa) : '')};
  padding-top: 20px;
  font-weight: bolder;
  font-family: 'Raleway';

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 20px;
    align-self: start;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    font-size: 24px;
  }
`;

function Heading({children}) {
    const id = children[0].props.value.replace(/\s+/g, '-').toLowerCase();

    return <StyledH2 className='content' id={id}>{children}</StyledH2>

}

export default Heading;
