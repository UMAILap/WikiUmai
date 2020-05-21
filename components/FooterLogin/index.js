import React from 'react';

import {Container, Texto, ContainerFooter, Imagenes} from './styles';
import { Wrapper } from 'components';

function FooterLogin() {
  return (
    <Container>
      <Wrapper>
        <ContainerFooter>
          <Texto>
            Este sitio ha sido diseñado y desarrollado por alumnos de la Carrera
            de Multimedia. Escuela de Comunicación y Diseño Multimedial,
            Universidad Maimónides.
          </Texto>
          <Imagenes>
            <img src="./creative_commons.png" />
            <img src="./logo_footer.png" />
          </Imagenes>
        </ContainerFooter>
      </Wrapper>
    </Container>
  );
}

export default FooterLogin;
