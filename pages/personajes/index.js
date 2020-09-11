import React from 'react';
import { getDataCollection } from 'utils';
import {
  Layout,
  PersonajesUniverso as PersonajesUniversoContainer,
} from 'containers';

function PersonajesUniverso({ data }) {
  return (
    <Layout>
      <PersonajesUniversoContainer data={data} />
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  const data = await getDataCollection('personajes', res);
  return { props: { data } };
}
/* PersonajesUniverso.getInitialProps = ctx => {
  const { params } = ctx.query;
  //FETCH
  return {
    params
  };
}; */
export default PersonajesUniverso;
