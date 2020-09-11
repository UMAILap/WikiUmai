import React from 'react';
import { getDataCollection } from 'utils';

import {
  Layout,
  TecnologiasUniverso as TecnologiasUniversoContainer,
} from 'containers';

function TecnologiasUniverso( props ) {
  return (
    <Layout>
      <TecnologiasUniversoContainer data={ props }/>
    </Layout>
  );
}

/*
TecnologiasUniverso.getInitialProps = ctx => {
  const { params } = ctx.query;
  //FETCH
  return {
    params
  };
};
*/


export async function getServerSideProps({ res }) {
  const data = await getDataCollection('objetos', res);
  console.log(data)
  return { props: data }
}



export default TecnologiasUniverso;
