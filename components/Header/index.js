import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  ContainerHeader,
  ContainerSearch,
  Search,
  MenuHamburguesa,
  Logo,
  ContainerUser,
  ContainerAvatar,
  Notification,
  User,
  ContainerBotones,
  StyledLink,
  MenuSlide,
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
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuUniverso, setOpenMenuUniverso] = useState(false);
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const IniciarSesion = true;
  const displayBotton = true;

  const DropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const DropdownChildVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

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
              {/* <div onClick={() => setOpenMenuUniverso(!openMenuUniverso)}>
                <div className="universo">Universo
                <div className={openMenuUniverso ? 'MenuDownUniverso' : 'MenuUpUniverso'}> */}
              <StyledLink href="/personajes">Personajes</StyledLink>
              <StyledLink href="/tecnologias">Tecnologias</StyledLink>
              <StyledLink href="/historias">Historias</StyledLink>
              <StyledLink href="/ayudas">Ayudas y reglas</StyledLink>
            </div>
            {/* </div>
              </div> */}

            {/* </div> */}
          </MenuHamburguesa>

          {/* <MenuHamburguesa onClick={() => setOpenMenu(!openMenu)}>
            <img src="/menu.svg" />
            <div className={openMenu ? 'MenuDown' : 'MenuUp'}>
              <div onClick={() => setOpenMenuUniverso(!openMenuUniverso)}>
                <div className="universo">
                  Universo
                  <div
                    className={
                      openMenuUniverso ? 'MenuDownUniverso' : 'MenuUpUniverso'
                    }>
                    <StyledLink href="/personajes">Personajes</StyledLink>
                    <StyledLink href="/tecnologias">Tecnologias</StyledLink>
                    <StyledLink href="/historias">Historias</StyledLink>
                  </div>
                </div>
              </div>
              <StyledLink>Ayudas y reglas</StyledLink>
              <StyledLink
                href="/login"
                IniciarSesion={IniciarSesion}
                displayBotton={displayBotton}>
                Iniciar Sesion
              </StyledLink>
            </div>
          </MenuHamburguesa> */}
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

                <AnimatePresence>
                  {open && (
                    <motion.div
                      key="dropdown"
                      className="dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={DropdownVariants}>
                      <StyledLink
                        href="/personajes"
                        initial="hidden"
                        exit="exit"
                        variants={DropdownChildVariants}>
                        Personajes
                      </StyledLink>
                      <StyledLink
                        href="/tecnologias"
                        initial="hidden"
                        exit="exit"
                        variants={DropdownChildVariants}>
                        Tecnologias
                      </StyledLink>
                      <StyledLink
                        href="/historias"
                        initial="hidden"
                        exit="exit"
                        variants={DropdownChildVariants}>
                        Historias
                      </StyledLink>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            <Link href="/login" passHref>
              <StyledLink IniciarSesion={IniciarSesion}>
                Iniciar Sesion
              </StyledLink>
            </Link>
            <ContainerAvatar>
              <ul>
                <li onClick={() => setOpenMenuUser(!openMenuUser)}>
                  <User>
                    <img src="/perfil-header.png" />
                  </User>
                  <div className={openMenuUser ? 'dropdown' : 'dropup'}>
                    {/* Hacer bien los Links */}
                    <StyledLink href="/perfil">Perfil</StyledLink>
                    <StyledLink href="/logout">Cerrar Sesión</StyledLink>
                  </div>
                </li>
              </ul>
            </ContainerAvatar>
          </ContainerUser>
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
}

export default Header;
