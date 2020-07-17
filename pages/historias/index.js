import React from 'react';

import {
  Layout,
  HistoriasUniverso as HistoriasUniversoContainer,
} from 'containers';

function HistoriasUniverso({ params }) {
  return (
    <Layout>
      <HistoriasUniversoContainer />
    </Layout>
  );
}
HistoriasUniverso.getInitialProps = ctx => {
  const { params } = ctx.query;
  //FETCH
  return {
    params
  };
};
export default HistoriasUniverso;
