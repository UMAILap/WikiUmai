import React from 'react';
import { getDataCollection } from 'utils';

import { Layout, Reglas as ReglasContainer } from 'containers';

function Reglas({data}) {
  return (
    <Layout>
      <ReglasContainer data={data} />
    </Layout>
  );
}
export async function getServerSideProps({ res }) {
  const data = await getDataCollection('ayuda', res);
  console.log('hola', data);
  return { props: { data } };
}

export default Reglas;
