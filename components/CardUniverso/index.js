import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { UniversoCard } from './styles';

function CardUniverso({ children, href }) {
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
}
CardUniverso.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardUniverso;
