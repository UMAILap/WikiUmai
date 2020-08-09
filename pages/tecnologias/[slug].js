import React from 'react';
import { getCollectionBySlug } from 'utils';

import { Layout, Tecnologias as TecnologiasContainer } from 'containers';

function Tecnologias(props) {
  return (
    <Layout>
      <TecnologiasContainer data={props} />
    </Layout>
  );
}
export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'objetos',res)
    return { props: data }
}

export default Tecnologias;
