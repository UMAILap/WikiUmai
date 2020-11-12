import React from 'react';
import { getDataCollection } from 'utils';
import { Layout, Planetas as PlanetasContainer } from 'containers';

function Planetas({data}) {
    return (
        <Layout>
            <PlanetasContainer data={data}/>
        </Layout>
    );
}

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getDataCollection(`planetas/slug/${slug}`, res);
    return { props: {data} }
}


export default Planetas;
