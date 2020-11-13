import React from 'react';
import { BASE_URL } from 'utils';
import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

const StyledStrong = styled.strong`
  font-weight: bolder;
  color: ${leerColor(colores.violeta)};
`;
function Strong({ children, ...props }) {
  console.log(props);
  return <StyledStrong {...props}>{children}</StyledStrong>;
}

export default Strong;
