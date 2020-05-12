import React from 'react';

import { Container, ContainerHeader, ContainerSearch, Logo, ContainerUser, Notification, User, ContainerBotones, Link } from './styles';
import { Wrapper } from 'components';

function Header() {
  return (
    <Container>
      <Wrapper>
        <ContainerHeader>
          <Logo>
            <img src="./logo.png" />
          </Logo>
          <ContainerSearch>
            <input
              type="text"
              name="search"
              placeholder="Buscar contenido (L)"></input>
            <i className="fas fa-search"></i>
          </ContainerSearch>
          <ContainerBotones>
            <Link>Planetas</Link>
            <Link>Foro</Link>
            <Link>Ayudas y reglas</Link>
          </ContainerBotones>
          <ContainerUser>
            <Notification src="./notificacion-header.png" />
            <User src="./perfil-header.png" />
          </ContainerUser>
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
}

export default Header;
