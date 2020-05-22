import React from 'react';


import { ContainerMain, ContainerLogin, ContenedorForm, FormLogin, Boton1, Boton2, Text, Bienvenido, Intro, ImagenLogin, Olvidaste} from '../Login/syles';
import { Wrapper } from 'components';


function LoginContainer() {
 
  return (
    <ContainerMain>
        <Wrapper>
        <ContenedorForm>
          <ContainerLogin>
            <Text>
              <Bienvenido>¡Bienvenido!</Bienvenido>
              <ImagenLogin src="./logo_colores.svg"/>
            </Text>
            <Intro>all boys y aca va info de la wiki chicoz</Intro>
                    <FormLogin id='form'>       
                      <input className='input' type="text"   
                       placeholder="Usuario"/>
                      <input className='input' type="text"  
                       placeholder="Contraseña"/>     
                       <Olvidaste>Olvidaste tu contraseña? JODETE</Olvidaste>     
                      <Boton1 id='submit'>Iniciar Sesión</Boton1>
                      <Boton2 id='submit'>Solicitar cuenta</Boton2>
                  </FormLogin>
            </ContainerLogin>
          </ContenedorForm>

        </Wrapper>
      
    
        {/* <Footer /> */}

    </ContainerMain>
    
  );
}

export default LoginContainer;
