import React from 'react';

import {
  Layout,
  PersonajesUniverso as PersonajesUniversoContainer,
} from 'containers';

function PersonajesUniverso({ params }) {
  return (
    <Layout>
      <PersonajesUniversoContainer />
    </Layout>
  );
}
PersonajesUniverso.getInitialProps = ctx => {
  const { params } = ctx.query;
  //FETCH
  return {
    params
  };
};
export default PersonajesUniverso;
