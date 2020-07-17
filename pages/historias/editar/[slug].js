import React from 'react';

import { Layout, EditarHistoria as HistoriaContainer } from 'containers';

function EditarHistoria({ slug }) {
    return (
        <Layout>
            <HistoriaContainer />
        </Layout>
    );
}
EditarHistoria.getInitialProps = ctx => {
    const { slug } = ctx.query;
    //FETCH
    return {
        slug
    };
};
export default EditarHistoria;