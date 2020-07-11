import React, { useState } from 'react';
import _ from 'lodash';
import { Planetas, Planeta } from './styles';

function PlanetasPills({ isFlex, multiple }) {
  const [selectedPlanet, setSelectedPlanet] = useState(multiple ? [] : null);

  function handleClickPlaneta(planet_name) {
    if (multiple = true && _.includes(selectedPlanet, planet_name)){  
      const copieValuesArray = selectedPlanet; //copiamos el array
      const objetoABorrar = planet_name;
      const newValuesArray = _.isEmpty(objetoABorrar)
      ? copieValuesArray
      : _.remove(copieValuesArray, objeto =>
          _.isEqual(objetoABorrar, objeto),
        ); //si objeto a borrar es empty guarda la copia del array, sino borra el objeto que es marcado
        setSelectedPlanet({
      
      selectedPlanet: newValuesArray,
    });
    } else{
      setSelectedPlanet([...selectedPlanet, planet_name]);
      return;
    } 
    setSelectedPlanet(planet_name);
  }
  function handleColorPlaneta(nombrePlaneta) {
    if (multiple) {
      return _.includes(selectedPlanet, nombrePlaneta);
    }
    return selectedPlanet === nombrePlaneta;
  }

  return (
    <Planetas isFlex={isFlex}>
      <Planeta
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('wereld')}
        onClick={() => handleClickPlaneta('wereld')}>
        Wereld
      </Planeta>
      <Planeta
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('zoro')}
        onClick={() => handleClickPlaneta('zoro')}>
        Zoro
      </Planeta>
      <Planeta
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('sol')}
        onClick={() => handleClickPlaneta('sol')}>
        Sol
      </Planeta>
      <Planeta
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('ikigai')}
        onClick={() => handleClickPlaneta('ikigai')}>
        Ikigai
      </Planeta>
      <Planeta
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('nima')}
        onClick={() => handleClickPlaneta('nima')}>
        Nima
      </Planeta>
      <Planeta
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('adhera')}
        onClick={() => handleClickPlaneta('adhera')}>
        Adhera
      </Planeta>
    </Planetas>
  );
}

export default PlanetasPills;
