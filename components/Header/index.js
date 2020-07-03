import React from 'react';
import Link from 'next/link';

import { Container, ContainerHeader, ContainerSearch, Search, MenuHamburguesa, Logo, ContainerUser, Notification, User, ContainerBotones, StyledLink } from './styles';
import { Wrapper } from 'components';

function Header() {
  return (
    <Container>
      <Wrapper>
        <ContainerHeader>
          <MenuHamburguesa>
            <img src="/menu.svg" />
          </MenuHamburguesa>
          <Logo>
            <Link href="/index">
              <a><img src="/logo.png" /></a>
            </Link>
          </Logo>
          <ContainerSearch>
            <input
              type="text"
              name="search"
              placeholder="Buscar contenido"></input>
            <i className="fas fa-search"></i>
          </ContainerSearch>
          <ContainerBotones>
            <StyledLink>Universo</StyledLink>
            <StyledLink>Foro</StyledLink>
            <StyledLink>Ayudas y reglas</StyledLink>
          </ContainerBotones>
          <ContainerUser>
            <Search>
              <img src="/search.png" />
            </Search>
            <Notification src="/notificacion-header.svg" />
            <Link href="/perfil" passHref>
              <User>
                <img src="/perfil-header.png" />
              </User>
            </Link>
          </ContainerUser>
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
}

export default Header;
