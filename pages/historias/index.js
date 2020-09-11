import React from 'react';
import { getDataCollection } from 'utils';
import {
  Layout,
  HistoriasUniverso as HistoriasUniversoContainer,
} from 'containers';

function HistoriasUniverso({ data }) {
  return (
    <Layout>
      <HistoriasUniversoContainer data={data} />
    </Layout>
  );
}
export async function getServerSideProps({ res }) {
  const data = await getDataCollection('historias', res);
  return { props: { data } };
}
export default HistoriasUniverso;
