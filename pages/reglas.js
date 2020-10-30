import React from 'react';
import { getDataCollection } from 'utils';

import { Layout, Reglas as ReglasContainer } from 'containers';

function Reglas(props) {
  return (
    <Layout>
      <ReglasContainer data={props} />
    </Layout>
  );
}
export async function getServerSideProps({ res }) {
    const data = await getDataCollection('ayuda', res);
    console.log('hola', res);
    return { props: { data } };
}

export default Reglas;
