import React from 'react';
import { api, addBearerToken, routes } from 'utils';
import Cookies from 'js-cookie';

import { Layout, Perfil as PerfilContainer } from 'containers';

function Perfil() {
  // { perfilData }
  //console.log('user data', perfilData)
  return (
    <Layout>
      <PerfilContainer />
    </Layout>
  );
}

export default Perfil;

// Perfil.getInitialProps = async (ctx) => {
//     const cookie = ctx.req ? ctx.req.headers.cookie  : null
//    // const token = Cookies.get('token')
//     const token = cookie.substring(6);
//     console.log(token)
//     addBearerToken(token)
//     const { data } = await api.get(`${routes.me}`);
//     return { userList: data };
// }
