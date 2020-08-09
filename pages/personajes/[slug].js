import React from 'react';
import { getCollectionBySlug } from 'utils';

import { Layout, Personajes as PersonajesContainer } from 'containers';

function Personajes(props) {
  return (
    <Layout>
      <PersonajesContainer data={props} />
    </Layout>
  );
}

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'personajes',res)
    return { props: data }
}

export default Personajes;
