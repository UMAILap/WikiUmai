import React from 'react';

import { Container, ContainerHeader, ContainerSearch, Search, MenuHamburguesa, Logo, ContainerUser, Notification, User, ContainerBotones, Link } from './styles';
import { Wrapper } from 'components';

function Header() {
  return (
    <Container>
      <Wrapper>
        <ContainerHeader>
          
          <Logo>
            <img src="/logo.png" />
          </Logo>
        
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
}

export default Header;
