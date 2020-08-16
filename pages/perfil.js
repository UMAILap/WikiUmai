import React from 'react';
import { getUserData } from 'utils';

import { Layout, Perfil as PerfilContainer } from 'containers';

function Perfil(props) {
  return (
    <Layout>
      <PerfilContainer data={props} />
    </Layout>
  );
}

export default Perfil;

export async function getServerSideProps(ctx) {
    const data = await getUserData(ctx)
    return { props: data }
}
