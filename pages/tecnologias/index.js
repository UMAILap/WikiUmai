import React from 'react';

import {
  Layout,
  TecnologiasUniverso as TecnologiasUniversoContainer,
} from 'containers';

function TecnologiasUniverso({ params }) {
  return (
    <Layout>
      <TecnologiasUniversoContainer />
    </Layout>
  );
}
TecnologiasUniverso.getInitialProps = ctx => {
  const { params } = ctx.query;
  //FETCH
  return {
    params
  };
};
export default TecnologiasUniverso;
