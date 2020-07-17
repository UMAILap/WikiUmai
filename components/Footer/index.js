import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Container, Texto, ContainerFooter, Imagenes } from './styles';
import { Wrapper } from 'components';

function Footer({ href }) {
  const router = useRouter();
  const linkPagina = router.pathname;
  console.log(linkPagina);

  const home = linkPagina == '/' || linkPagina == '/index' ? true : false;
  console.log(home);
  /*
function HandleLinkHome(){
    if(linkPagina = "/"){
      home =true;
    }
    else{
     home = false;
    }
  } */
  return (
    <Container home={home}>
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

export default Footer;
