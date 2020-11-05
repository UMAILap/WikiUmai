import React from 'react';
import { Layout } from 'containers';
import { Wrapper, Titulos } from 'components';

function My404() {
  return (
    <Layout>
      <Wrapper direction="column">
        <img
          src="/images/404.png"
          style={{ margin: '40px 0', height: '400px' }}
        />
        <Titulos style={{ margin: '0 auto' }} level="1">
          La página solicitada no fue encontrada
        </Titulos>
      </Wrapper>
    </Layout>
  );
}

export default My404;
