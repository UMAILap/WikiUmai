import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerHeader,
  ContainerSearch,
  Search,
  MenuHamburguesa,
  Logo,
  ContainerUser,
  Notification,
  User,
  ContainerBotones,
  StyledLink,
} from './styles';
import { Wrapper } from 'components';

function Header() {
  // var down = false;

  // function handleClickMenu() {

  //   console.log("universo");
  //   if(down = true){
  //      console.log(down);
  //      down = false;
  //   }
  //}
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <ContainerHeader>
          <MenuHamburguesa>
            <img src="/menu.svg" />
          </MenuHamburguesa>
          <Logo>
            <Link href="/index">
              <a>
                <img src="/logo.png" />
              </a>
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
            <ul>
              <li onClick={() => setOpen(!open)}>
                <StyledLink>Universo</StyledLink>
                <div className={open ? 'dropdown' : 'dropup'}>
                  <StyledLink href="/personajes">Personajes</StyledLink>
                  <StyledLink href="/tecnologias">Tecnologias</StyledLink>
                  <StyledLink href="/historias">Historias</StyledLink>
                </div>
              </li>
            </ul>
            {/* <div>
            <StyledLink onClick={() => setOpen(!open)}>Universo</StyledLink>
            <ul className={open ? 'dropdown' : 'dropup'}>
              <StyledLink className={open ? 'dropdown' : 'dropup'}>Personajes</StyledLink>
              <StyledLink className={open ? 'dropdown' : 'dropup'}>Tecnologias</StyledLink>
              <StyledLink className={open ? 'dropdown' : 'dropup'}>Historias</StyledLink>
            </ul>
            </div> */}
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
