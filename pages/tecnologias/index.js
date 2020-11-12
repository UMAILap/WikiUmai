import React from 'react';
import { getDataCollection } from 'utils';

import {
  Layout,
  TecnologiasUniverso as TecnologiasUniversoContainer,
} from 'containers';

function TecnologiasUniverso( {data, filter} ) {
  return (
    <Layout>
      {filter ? <TecnologiasUniversoContainer data={data} filter={filter} /> : <TecnologiasUniversoContainer data={data} />}

    </Layout>
  );
}

export async function getServerSideProps({ res, query }) {
  const filter = query.filter;
  console.log(filter);
  const data = await getDataCollection('objetos', res);
  if (filter) {
    return { props: { data, filter } };
  }else{
    return { props: { data } };
  }
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
