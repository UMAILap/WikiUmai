import React from 'react';

import { Layout, EditarPersonaje as PersonajeContainer } from 'containers';

function EditarPersonaje({ slug }) {
    return (
        <Layout>
            <PersonajeContainer />
        </Layout>
    );
}
EditarPersonaje.getInitialProps = ctx => {
    const { slug } = ctx.query;
    //FETCH
    return {
        slug
    };
};
export default EditarPersonaje;