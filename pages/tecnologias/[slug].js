import React from 'react';

import { Layout, Tecnologias as TecnologiasContainer } from 'containers';

function Tecnologias({ slug }) {
  return (
    <Layout>
      <TecnologiasContainer />
    </Layout>
  );
}
Tecnologias.getInitialProps = ctx => {
  const { slug } = ctx.query;
  //FETCH
  return {
    slug
  };
};
export default Tecnologias;
