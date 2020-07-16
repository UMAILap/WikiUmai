import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { VioletaBoton } from './styles';

function BotonVioleta({ children, isColorPink, isBotonRosa, href }) {
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <VioletaBoton
      isColorPink={isColorPink}
      isBotonRosa={isBotonRosa}
      href={href}
      onClick={handleClick}>
      {children}
    </VioletaBoton>
  );
}
BotonVioleta.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BotonVioleta;
