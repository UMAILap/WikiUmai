import React from 'react';

import { Container, Wrapper, Texto, ContainerFooter } from './styles';

function Footer() {
  return (
    <Container> 
        <Wrapper>
          <ContainerFooter>          
            <Texto>Este sitio ha sido diseñado y desarrollado por alumnos de la Carrera de Multimedia. Escuela de Comunicación y Diseño Multimedial, Universidad Maimónides.</Texto>
          </ContainerFooter>
          <ContainerFooter>
            <img src= "./creative_commons.png"/>
            <img src= "./logo_footer.png"/>
          </ContainerFooter>
        </Wrapper>
    </Container>
  );
}

export default Footer;
