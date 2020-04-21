import React from 'react';

import { Container, Wrapper, ContainerSearch, ContainerLogo, ContainerUser } from './styles';

function Header() {
  return (
      <Container> 
          <Wrapper>
            <ContainerLogo>
              <img src= "./logo.png"/>
            </ContainerLogo>
            <ContainerSearch>
              <form>
                <input type="text" name="search" placeholder="Buscar contenido (L)"></input>
              </form>
            </ContainerSearch>
            <ContainerUser>
              <img src= "./logo.png"/>
            </ContainerUser>
          </Wrapper>
      </Container>
    );
    
}

export default Header;
