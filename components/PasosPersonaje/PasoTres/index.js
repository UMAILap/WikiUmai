import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
    const { valuesArray } = usedValues;
    //console.log(value);
    //usedValues.valuesArray.push(value);
    //console.log('value array despues: ' + usedValues.valuesArray);
    /*setUsedValues({
      ...usedValues,
      inputErrors: {
        ...usedValues.inputErrors,
        [inputKey]: false,
      },
    });*/
    if (_.find(valuesArray, objeto => objeto.value === value)) {
      //fin busca un objeto dentro de values array que tenga el valor value si encuentra lo marca como error sino no
      setUsedValues({
        ...usedValues,
        inputErrors: {
          ...usedValues.inputErrors,
          [inputKey]: true,
        },
      });
    } else if (_.isEmpty(value)) {
      //
      const objetoABorrar = _.find(
        valuesArray,
        objeto => objeto.inputKey === inputKey,
      ); //se guarda en la const lops objetos encontrados por find
      const copieValuesArray = valuesArray; //copiamos el array
      const newValuesArray = _.isEmpty(objetoABorrar)
        ? copieValuesArray
        : _.remove(copieValuesArray, objeto =>
            _.isEqual(objetoABorrar, objeto),
          ); //si objeto a borrar es empty guarda la copia del array, sino borra el objeto que es marcado
      setUsedValues({
        ...usedValues,
        valuesArray: newValuesArray,
        inputErrors: {
          ...usedValues.inputErrors,
          [inputKey]: false,
        },
      });
    } else {
      setUsedValues({
        ...usedValues,
        valuesArray: [...valuesArray, { value, inputKey }],
        inputErrors: {
          ...usedValues.inputErrors,
          [inputKey]: false,
        },
      });
    }
    console.log(usedValues.valuesArray);
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
                className={usedValues.inputErrors.fuerza ? 'error' : ''}
                onChange={event =>
                  handleInputChange(event.target.value, 'fuerza')
                }
              />
              <input
                type="number"
                min="1"
                max="4"
                className={usedValues.inputErrors.inteligencia ? 'error' : ''}
                onChange={event =>
                  handleInputChange(event.target.value, 'inteligencia')
                }
              />
              <input
                type="number"
                min="1"
                max="4"
                className={usedValues.inputErrors.habilidad ? 'error' : ''}
                onChange={event =>
                  handleInputChange(event.target.value, 'habilidad')
                }
              />
              <input
                type="number"
                min="1"
                max="4"
                className={usedValues.inputErrors.suerte ? 'error' : ''}
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
              <span
                style={{
                  color: _.find(
                    usedValues.valuesArray,
                    objeto => objeto.value === "1",
                  )
                    ? 'gray'
                    : '',
                }}>
                1
              </span>
              <span
                style={{
                  color: _.find(
                    usedValues.valuesArray,
                    objeto => objeto.value === "2",
                  )
                    ? 'gray'
                    : '',
                }}>
                2
              </span>
              <span
                style={{
                  color: _.find(
                    usedValues.valuesArray,
                    objeto => objeto.value === "3",
                  )
                    ? 'gray'
                    : '',
                }}>
                3
              </span>
              <span
                style={{
                  color: _.find(
                    usedValues.valuesArray,
                    objeto => objeto.value === "4",
                  )
                    ? 'gray'
                    : '',
                }}>
                4
              </span>
            </Puntos>
          </PuntosHabilidad>
        </CaracteristicasPersonaje>
      </Datos>
    </PasoContainer>
  );
}

export default PasoTres;
