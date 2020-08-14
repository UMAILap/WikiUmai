import React from 'react';

import { 
    Layout, 
    // EditarTecnologia as TecnologiaContainer 
} from 'containers';

function EditarTecnologia({ slug }) {
    return (
        <Layout>
            {/* <TecnologiaContainer /> */}
        </Layout>
    );
}
EditarTecnologia.getInitialProps = ctx => {
    const { slug } = ctx.query;
    //FETCH
    return {
        slug
    };
};
export default EditarTecnologia;