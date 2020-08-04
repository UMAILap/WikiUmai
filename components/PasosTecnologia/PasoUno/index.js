import React, { useState } from 'react';

import {
  PasoContainer,
  PasoTitulo,
  Historia,
  HistoriaInfo,
  HistoriaNombre,
  HistoriaPlaneta,
  HistoriaPlanetaTitulo,
} from './styles';

import { PlanetasPills } from '../..';

function PasoUno() {
  return (
    <PasoContainer>
      <PasoTitulo>¿Cómo se llama la tecnología?</PasoTitulo>
      <Historia>
        <HistoriaInfo>
          <HistoriaNombre>
            <input type="text" placeholder="Titulo" />
          </HistoriaNombre>
          <HistoriaPlaneta>
            <HistoriaPlanetaTitulo>Planeta</HistoriaPlanetaTitulo>
            <PlanetasPills />
          </HistoriaPlaneta>
        </HistoriaInfo>
      </Historia>
    </PasoContainer>
  );
}

export default PasoUno;
