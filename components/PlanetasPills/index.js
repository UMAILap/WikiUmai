import React, { useState } from 'react';

import {
  Planetas,
  Planeta,
} from './styles';

function PlanetasPills() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  function handleClickPlaneta(planet_name) {
    setSelectedPlanet(planet_name);
  }

  return (
  
            <Planetas>
              <Planeta
                colorFondo={selectedPlanet === 'wereld' ? true : false}
                onClick={() => handleClickPlaneta('wereld')}>
               Wereld
              </Planeta>
              <Planeta
                colorFondo={selectedPlanet === 'zoro' ? true : false}
                onClick={() => handleClickPlaneta('zoro')}>
                Zoro
              </Planeta>
              <Planeta
                colorFondo={selectedPlanet === 'sol' ? true : false}
                onClick={() => handleClickPlaneta('sol')}>
                Sol
              </Planeta>
              <Planeta
                colorFondo={selectedPlanet === 'ikigai' ? true : false}
                onClick={() => handleClickPlaneta('ikigai')}>
                Ikigai
              </Planeta>
              <Planeta
                colorFondo={selectedPlanet === 'nima' ? true : false}
                onClick={() => handleClickPlaneta('nima')}>
                Nima
              </Planeta>
              <Planeta
                colorFondo={selectedPlanet === 'adhera' ? true : false}
                onClick={() => handleClickPlaneta('adhera')}>
                Adhera
              </Planeta>
            </Planetas>
  
  );
}

export default PlanetasPills;
