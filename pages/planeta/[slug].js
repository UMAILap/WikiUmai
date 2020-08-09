import React from 'react';
import { getCollectionBySlug } from 'utils';
import { Layout, Planetas as PlanetasContainer } from 'containers';

function Planetas(props) {
    return (
        <Layout>
            <PlanetasContainer data={props} />
        </Layout>
    );
}

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'planetas',res)
    return { props: data }
}


export default Planetas;
