import React from 'react';

import { Layout, Historias as HistoriasContainer } from 'containers';

function Historias({ slug }) {
  return (
    <Layout>
      <HistoriasContainer />
    </Layout>
  );
}

Historias.getInitialProps = ctx => {
  const { slug } = ctx.query;
  //FETCH
  return {
    slug
  };
};
export default Historias;
