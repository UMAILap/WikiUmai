import React from 'react';
import { getDataCollection } from 'utils';
import { Layout, Home as HomeContainer } from 'containers';

function Home({ data }) {
  const isHome = true;
  return (
    <Layout>
      <HomeContainer data={data}/>
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  const data = await getDataCollection('ultimas_entradas?limit=8', res);
  return { props: { data } };
}


export default Home;
