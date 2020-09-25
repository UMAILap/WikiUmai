import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { VioletaBoton } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
const BotonVioleta = React.forwardRef(
  ({ onClick, isColorPink, isBotonRosa, children, href }, ref) => {
    return (
      <VioletaBoton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isColorPink={isColorPink}
        isBotonRosa={isBotonRosa}
        href={href}
        onClick={onClick}
        ref={ref}>
        {children}
      </VioletaBoton>
    );
  },
);

//VERSIÓN CON HOOK ROUTER SIN REACT.FORWARDREF
/* function BotonVioleta({ children, isColorPink, isBotonRosa, href }) {
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
} */
BotonVioleta.propTypes = {
  children: PropTypes.string,
};

export default BotonVioleta;
