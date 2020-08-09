import React from 'react';

import { Layout, Home as HomeContainer } from 'containers';

function Home({data}) {
  const isHome = true;
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
}

export default Home;
