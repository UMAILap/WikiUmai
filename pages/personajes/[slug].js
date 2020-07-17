import React from 'react';

import { Layout, Personajes as PersonajesContainer } from 'containers';

function Personajes({ slug }) {
  return (
    <Layout>
      <PersonajesContainer />
    </Layout>
  );
}
Personajes.getInitialProps = ctx => {
  const { slug } = ctx.query;
  //FETCH
  return {
    slug
  };
};
export default Personajes;
