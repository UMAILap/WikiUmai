import React from 'react';
import { getDataCollection } from 'utils';
import { Layout, Home as HomeContainer } from 'containers';

function Home({ data, planetas }) {
  const isHome = true;
  return (
    <Layout>
      <HomeContainer data={data} planetas={planetas} />
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  const data = await getDataCollection('ultimas_entradas?limit=8', res);
  const planetas = await getDataCollection('planetas', res);
  return { props: { data, planetas } };
}

export default Home;
