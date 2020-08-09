import React from 'react';
import { getCollectionBySlug } from 'utils';

import { Layout, Historias as HistoriasContainer } from 'containers';

function Historias(props) {
  return (
    <Layout>
      <HistoriasContainer data={props}/>
    </Layout>
  );
}

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'historias',res)
    return { props: data }
}

export default Historias;
