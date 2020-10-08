import React from 'react';
import { Layout } from 'containers';
import Imagen404 from '../public/images/404.png';

function My404() { 
  return(

    <Layout>
      
      <img src={Imagen404} />
      <h1>La página solicitada no fue encontrada. Viajero perdido! </h1>

    </Layout>
  

  ) 
}

export default My404;
