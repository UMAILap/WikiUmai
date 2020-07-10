import React, { useState } from 'react';
import Link from 'next/link';

import { Container, ContainerHeader, ContainerSearch, Search, MenuHamburguesa, Logo, ContainerUser, Notification, User, ContainerBotones, StyledLink } from './styles';
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
            <StyledLink                        
              onClick={() => setOpen(!open)}>                    
              Universo
              <ul 
              className={open? 'dropdown' : 'dropup'}>
                <li>Personajes</li>
                <li>Tecnologias</li>
                <li>Historias</li>
              </ul>
            </StyledLink>
              
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
