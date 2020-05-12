import React from 'react';
import PropTypes from 'prop-types';

import { WrapperContainer } from './styles';

function Wrapper({ children }) {
  return (
    <WrapperContainer>
      {children}
    </WrapperContainer>
  );
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
