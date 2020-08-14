import React, { useState } from 'react';
import { api } from 'utils';
import { useAuth } from 'contexts';
import { BASE_URL, routes } from 'utils';

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
  const { setToken } = useAuth();
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const identifier = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;

    api
      .post(`/api/auth/login`, { identifier, password })
      .then(response => {
        //const token = response.data.jwt;
        console.log(response);
      })
      .catch(error => {
        setErrors(error.response.data || []);
        console.log(error);
      });
  };
  return (
    <>
      <Wrapper>
        <ContainerBlanco>
          <>
            <Text>
              <Bienvenido>¡Bienvenido!</Bienvenido>
              <ImagenLogin src="/logo_colores.svg" />
            </Text>
            <Intro>
              No se que poner aca pero va un texto sobre el Universo Narrativo
            </Intro>
            <FormLogin id="form" onSubmit={handleFormSubmit}>
              <input
                className="input"
                name="email"
                type="text"
                placeholder="Usuario"
              />
              <input
                className="input"
                name="password"
                type="text"
                placeholder="Contraseña"
              />
              <Olvidaste>¿Olvidaste tu contraseña?</Olvidaste>
              <IniciarSesion id="submit">Iniciar Sesión</IniciarSesion>
              <SolicitarCuenta id="submit">Solicitar cuenta</SolicitarCuenta>
            </FormLogin>
          </>
        </ContainerBlanco>
      </Wrapper>
    </>
  );
}

export default LoginContainer;
