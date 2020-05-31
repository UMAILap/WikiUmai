import React from 'react';

import {
  ContainerMain,
  FormLogin,
  Boton1,
  Boton2,
  Text,
  Bienvenido,
  Intro,
  ImagenLogin,
  Olvidaste,
} from './styles';
import { Wrapper, ContainerBlanco } from 'components';

function LoginContainer() {
  return (
    <ContainerMain>
      <Wrapper>
        <ContainerBlanco>
          <Text>
            <Bienvenido>¡Bienvenido!</Bienvenido>
            <ImagenLogin src="./logo_colores.svg" />
          </Text>
          <Intro>
            No se que poner aca pero va un texto sobre el Universo Narrativo
          </Intro>
          <FormLogin id="form">
            <input className="input" type="text" placeholder="Usuario" />
            <input className="input" type="text" placeholder="Contraseña" />
            <Olvidaste>¿Olvidaste tu contraseña?</Olvidaste>
            <Boton1 id="submit">Iniciar Sesión</Boton1>
            <Boton2 id="submit">Solicitar cuenta</Boton2>
          </FormLogin>
        </ContainerBlanco>
      </Wrapper>
    </ContainerMain>
  );
}

export default LoginContainer;
