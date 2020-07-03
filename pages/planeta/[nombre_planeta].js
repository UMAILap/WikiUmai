import React from 'react';

import { Layout, Planetas as PlanetasContainer } from 'containers';

function Planetas({ nombre_planeta }) {
  console.log(nombre_planeta);
  return (
    < Layout >
      <PlanetasContainer />
    </ Layout>
  );
}

Planetas.getInitialProps = (ctx) => {
  console.log(ctx);
  const { nombre_planeta } = ctx.query;
  return (
    {
      nombre_planeta
    }
  )
}

export default Planetas;
