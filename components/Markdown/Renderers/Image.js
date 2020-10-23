import React from 'react';
import { BASE_URL } from 'utils';
import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

const StyledImg = styled.img`
  object-fit:contain;
  max-height: 50vh;
  width: 100%;
`;
function Image({src, ...props}) {
  console.log(props);
  return <StyledImg src={`${BASE_URL}${src}`} {...props} />;
}

export default Image;
