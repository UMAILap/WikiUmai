import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Planetas, Planeta } from './styles';

function PlanetasPills({ isFlex, multiple, onChange, selected }) {
  const [selectedPlanet, setSelectedPlanet] = useState(multiple ? [] : null);
  useEffect(() => {
    if (onChange) {
      onChange(selectedPlanet);
    }
  }, [selectedPlanet]);
  useEffect(() => {
    if (selected.length) {
      setSelectedPlanet(selected);
    }
  }, [selected]);
  function handleClickPlaneta(planet_name) {
    if ((multiple = true && _.includes(selectedPlanet, planet_name))) {
      const copieValuesArray = _.filter(selectedPlanet, function(s) {
        return s !== planet_name;
      });
      setSelectedPlanet(copieValuesArray);
    } else {
      setSelectedPlanet([...selectedPlanet, planet_name]);
      return;
    }
    if (!multiple) {
      setSelectedPlanet(planet_name);
    }
  }

  function handleColorPlaneta(nombrePlaneta) {
    console.log(selectedPlanet, nombrePlaneta);
    if (multiple) {
      return _.includes(selectedPlanet, nombrePlaneta);
    }
    return selectedPlanet === nombrePlaneta;
  }

  return (
    <Planetas isFlex={isFlex}>
      <Planeta
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('wereld')}
        onClick={() => handleClickPlaneta('wereld')}>
        Wereld
      </Planeta>
      <Planeta
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('zoro')}
        onClick={() => handleClickPlaneta('zoro')}>
        Zoro
      </Planeta>
      <Planeta
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('sol')}
        onClick={() => handleClickPlaneta('sol')}>
        Sol
      </Planeta>
      <Planeta
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('ikigai')}
        onClick={() => handleClickPlaneta('ikigai')}>
        Ikigai
      </Planeta>
      <Planeta
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('nima')}
        onClick={() => handleClickPlaneta('nima')}>
        Nima
      </Planeta>
      <Planeta
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isFlex={isFlex}
        colorFondo={handleColorPlaneta('adhara')}
        onClick={() => handleClickPlaneta('adhara')}>
        Adhara
      </Planeta>
    </Planetas>
  );
}

export default PlanetasPills;
