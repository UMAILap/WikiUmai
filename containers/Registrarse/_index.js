import React from 'react';

import { ContainerMain, FormLogin, Boton1, Text, Cuenta, Intro, ImagenLogin, Olvidaste } from './styles';
import { Wrapper, ContainerBlanco } from 'components';

// Comentario para el commit

function RegistroContainer() {
  return (
    <ContainerMain>
      <Wrapper>
          <ContainerBlanco>
            <Text>
              <Cuenta>Solicitar cuenta</Cuenta>
              <ImagenLogin src="./logo_colores.svg" />
            </Text>
            <Intro>
              Para la otorgación de una cuenta del Universo Narrativo, debes ser
              alumno de la universidad.
            </Intro>
            <FormLogin id="form">
              <input className="input1" type="text" placeholder="Nombre" />
              <input className="input2" type="text" placeholder="Apellido" />
              <input
                className="input"
                type="text"
                placeholder="Número de matrícula"
              />
            </FormLogin>
            <Olvidaste>¿No sabes tu número? </Olvidaste>
            <Boton1 id="submit">Solicitar cuenta</Boton1>
          </ContainerBlanco>
      </Wrapper>

      {/* <Footer /> */}
    </ContainerMain>
  );
}

export default RegistroContainer;
