import React from 'react';
import { api, routes } from 'utils';
import Cookies from 'js-cookie'

import { Layout, Perfil as PerfilContainer } from 'containers';

function Perfil(
   // { perfilData }
    ) {
    //console.log('user data', perfilData)
    return (
        <Layout>
            <PerfilContainer />
        </Layout>
    );
}

export default Perfil;

// Perfil.getInitialProps = async (ctx) => {
//     const token = Cookies.get('token')
//     console.log(token)
//     const { data } = await api.get(`${routes.me}`);
//     return { userList: data };
// }