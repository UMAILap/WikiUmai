import React from 'react';
import { getDataCollection } from 'utils';

import {
  Layout,
  TecnologiasUniverso as TecnologiasUniversoContainer,
} from 'containers';

function TecnologiasUniverso( {data} ) {
  return (
    <Layout>
      <TecnologiasUniversoContainer data={data} />
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  const data = await getDataCollection('objetos', res);
  return { props: { data } };
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

export default TecnologiasUniverso;
