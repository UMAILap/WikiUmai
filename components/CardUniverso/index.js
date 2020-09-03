import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { UniversoCard } from './styles';


const CardUniverso = React.forwardRef(({ onClick, children, href }, ref) => {

  return (
    <UniversoCard href={href} onClick={onClick} ref={ref}>
      {children}
    </UniversoCard>
  )
})

//VERSIÓN SIN REACT.FORWARDREF CON HOOK ROUTER
/* function CardUniverso({ children, href }) {
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <UniversoCard href={href} onClick={handleClick}>
      {children}
    </UniversoCard>
  );
} */


CardUniverso.propTypes = {
  children: PropTypes.array.isRequired,
};

CardUniverso.defaultProps = {
  children: [],
};

export default CardUniverso;
