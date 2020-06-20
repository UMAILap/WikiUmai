import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  PasoContainer,
  PasoTitulo,
  Datos,
  InformacionBasica,
  CaracteristicasPersonaje,
  Caracteristicas,
  CaracteristicasIconos,
  CaracteristicasPuntos,
  CaracteristicasNombres,
  PuntosHabilidad,
  Puntos,
} from './styles';

function PasoTres() {
  const [usedValues, setUsedValues] = useState({
    //variables que almacenamos útiles para la UI
    valuesArray: [],
    inputErrors: {
      fuerza: false,
      habilidad: false,
      inteligencia: false,
      suerte: false,
    },
  });

  function handleInputChange(value, inputKey) {
    //console.log('valor ' + value);
    //usedValues.valuesArray.push(value);
    //console.log('value array despues: ' + usedValues.valuesArray);

    if (usedValues.valuesArray.includes(value)) {
      setUsedValues({
        ...usedValues,
        inputErrors: {
          ...usedValues.inputErrors,
          [inputKey]: true,
        },
      });
    } else {
      setUsedValues({
        ...usedValues,
        valuesArray: [...usedValues.valuesArray, value],
      });
    }
  }
  const { inputErrors } = usedValues;

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
        <CaracteristicasPersonaje>
          <Caracteristicas>
            <CaracteristicasIconos>
              <img src="./fuerza.svg" />
              <img src="./inteligencia.svg" />
              <img src="./habilidad.svg" />
              <img src="./suerte.svg" />
            </CaracteristicasIconos>
            <CaracteristicasPuntos>
              <input
                type="number"
                min="1"
                max="4"
                onChange={event =>
                  handleInputChange(event.target.value, 'fuerza')
                }
              />
              <input
                type="number"
                min="1"
                max="4"
                onChange={event =>
                  handleInputChange(event.target.value, 'inteligencia')
                }
              />
              <input
                type="number"
                min="1"
                max="4"
                onChange={event =>
                  handleInputChange(event.target.value, 'habilidad')
                }
              />
              <input
                type="number"
                min="1"
                max="4"
                onChange={event =>
                  handleInputChange(event.target.value, 'suerte')
                }
              />
            </CaracteristicasPuntos>
            <CaracteristicasNombres>
              <h6>Fuerza</h6>
              <h6>Inteligencia</h6>
              <h6>Habilidad</h6>
              <h6>Suerte</h6>
            </CaracteristicasNombres>
          </Caracteristicas>
          <PuntosHabilidad>
            <p>
              Distribuí los siguientes puntos en las habilidades de tu personaje
            </p>

            <Puntos>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </Puntos>
          </PuntosHabilidad>
        </CaracteristicasPersonaje>
      </Datos>
    </PasoContainer>
  );
}

export default PasoTres;
