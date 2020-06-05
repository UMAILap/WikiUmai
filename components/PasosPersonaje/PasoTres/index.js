import React from 'react';
import PropTypes from 'prop-types';

import {
  PasoContainer,
  PasoTitulo,
  Datos,
  InformacionBasica,
  Caracteristicas,
  CaracteristicasIconos,
  CaracteristicasPuntos,
  CaracteristicasNombres,
} from './styles';

function PasoTres({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>Información básica y características</PasoTitulo>
      <Datos>
        <InformacionBasica>
          <input type="text" placeholder="Raza del personaje" />
          <input type="text" placeholder="Género" />
          <input type="text" placeholder="Profesión" />
          <input type="text" placeholder="Edad" />
          <input type="text" placeholder="Altura" />
        </InformacionBasica>
        <Caracteristicas>
          <CaracteristicasIconos>
            <img src="./fuerza.svg" />
            <img src="./inteligencia.svg" />
            <img src="./habilidad.svg" />
            <img src="./suerte.svg" />
          </CaracteristicasIconos>
          <CaracteristicasPuntos>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </CaracteristicasPuntos>
          <CaracteristicasNombres>
            <h6>Fuerza</h6>
            <h6>Inteligencia</h6>
            <h6>Habilidad</h6>
            <h6>Suerte</h6>
          </CaracteristicasNombres>
        </Caracteristicas>
      </Datos>
    </PasoContainer>
  );
}
PasoTres.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoTres;
