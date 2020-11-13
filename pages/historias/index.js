import React from 'react';
import { getDataCollection } from 'utils';
import {
  Layout,
  HistoriasUniverso as HistoriasUniversoContainer,
} from 'containers';

function HistoriasUniverso({ data, filter }) {
  return (
    <Layout>
      {filter ? (
        <HistoriasUniversoContainer data={data} filter={filter} />
      ) : (
        <HistoriasUniversoContainer data={data} />
      )}
    </Layout>
  );
}
export async function getServerSideProps({ res, query }) {
  const filter = query.filter;
  console.log(filter);
  const data = await getDataCollection('historias', res);
  if (filter) {
    return { props: { data, filter } };
  } else {
    return { props: { data } };
  }
}
export default HistoriasUniverso;
