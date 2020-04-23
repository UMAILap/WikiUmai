import React from 'react';

import { Wrapper, Texto, ContainerFooter } from './styles';

function Footer() {
  return (
      <Wrapper>
        <ContainerFooter>
          <Texto>
            Este sitio ha sido diseñado y desarrollado por alumnos de la Carrera
            de Multimedia. <br/> Escuela de Comunicación y Diseño Multimedial,
            Universidad Maimónides.
          </Texto>
        </ContainerFooter>
        <ContainerFooter>
          <img src="./creative_commons.png" />
          <img src="./logo_footer.png" />
        </ContainerFooter>
      </Wrapper>
  );
}

export default Footer;
