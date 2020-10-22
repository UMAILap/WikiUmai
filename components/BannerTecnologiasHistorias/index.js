import React from 'react';
import PropTypes from 'prop-types';

import { Banner } from './styles';

function BannerTecnologiasHistorias({ type, children }) {
  return <Banner type={type}>{children}</Banner>;
}

BannerTecnologiasHistorias.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BannerTecnologiasHistorias;
