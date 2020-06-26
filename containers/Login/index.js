import React from 'react';

import {
  FormLogin,
  IniciarSesion,
  SolicitarCuenta,
  Text,
  Bienvenido,
  Intro,
  ImagenLogin,
  Olvidaste,
} from './styles';
import { Wrapper, ContainerBlanco } from 'components';

function LoginContainer() {
  return (
    <>
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
            <IniciarSesion id="submit">Iniciar Sesión</IniciarSesion>
            <SolicitarCuenta id="submit">Solicitar cuenta</SolicitarCuenta>
          </FormLogin>
        </ContainerBlanco>
      </Wrapper>
    </>
  );
}

export default LoginContainer;
