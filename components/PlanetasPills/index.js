import React, { useState } from 'react';
import _ from 'lodash';
import { Planetas, Planeta } from './styles';

function PlanetasPills({ isFlex, multiple }) {
  const [selectedPlanet, setSelectedPlanet] = useState(multiple ? [] : null);

  function handleClickPlaneta(planet_name) {
    const CopieSelectedPlanet = selectedPlanet;
    if (multiple ) {            
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
  
  if (_.find(multiple, objeto => objeto.nombrePlaneta === nombrePlaneta)) {
    console.log("borrar");
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
