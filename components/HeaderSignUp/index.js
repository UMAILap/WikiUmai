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
  MenuSlide,
} from './styles';
import { Wrapper } from 'components';

function HeaderSignUp() {
  // var down = false;

  // function handleClickMenu() {

  //   console.log("universo");
  //   if(down = true){
  //      console.log(down);
  //      down = false;
  //   }
  //}
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuUniverso, setOpenMenuUniverso] = useState(false);

  const IniciarSesion = true;
  const displayBotton = true;
  return (
    <Container>
      <Wrapper>
        {/* <MenuSlide>
        <div onClick={() => setOpenMenu(!openMenu)}>
              <img src="/menu.svg" />           
        </div>
          <div className={openMenu ? 'MenuDown' : 'MenuUp'}>
                      <StyledLink href="#">Personajes</StyledLink>
                      <StyledLink href="#">Tecnologias</StyledLink>
                      <StyledLink href="#">Historias</StyledLink>
          </div>
      </MenuSlide> */}
        <ContainerHeader>
          <MenuHamburguesa onClick={() => setOpenMenu(!openMenu)}>
            <img src="/menu.svg" />
            <div className={openMenu ? 'MenuDown' : 'MenuUp'}>
              <ul>
                <li onClick={() => setOpenMenuUniverso(!openMenuUniverso)}>
                  <StyledLink className="universo">Universo</StyledLink>
                  <div
                    className={
                      openMenuUniverso ? 'MenuDownUniverso' : 'MenuUpUniverso'
                    }>
                    <StyledLink href="/personajes">Personajes</StyledLink>
                    <StyledLink href="/tecnologias">Tecnologias</StyledLink>
                    <StyledLink href="/historias">Historias</StyledLink>
                  </div>
                </li>
              </ul>
              <StyledLink>Foro</StyledLink>
              <StyledLink>Ayudas y reglas</StyledLink>
              <StyledLink
                href="/login"
                IniciarSesion={IniciarSesion}
                displayBotton={displayBotton}>
                Iniciar Sesion
              </StyledLink>
            </div>
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
            {/* <Notification src="/notificacion-header.svg" />
            <Link href="/perfil" passHref>
              <User>
                <img src="/perfil-header.png" />
              </User>
            </Link> */}
            <StyledLink href="/login" IniciarSesion={IniciarSesion}>
              Iniciar Sesion
            </StyledLink>
          </ContainerUser>
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
}

export default HeaderSignUp;
