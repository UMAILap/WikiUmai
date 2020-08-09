import React from 'react';
import { api } from 'utils';
import { BASE_URL } from 'utils';
import { Layout, Planetas as PlanetasContainer } from 'containers';

function Planetas(props) {
    return (
        <Layout>
            <PlanetasContainer data={props} />
        </Layout>
    );
}

export async function getServerSideProps({ res, params }) {
    const { nombre_planeta } = params;
    try {
        const response = await api.get(`${BASE_URL}/planetas?slug=${nombre_planeta}`)
        const responseData = response.data
        if (responseData.length) {
            const dataObject = responseData[0]
            return { props: { ...dataObject } }
        } else {
            res.setHeader("location", "/404");
            res.statusCode = 302;
            res.end();
            return { props: {} }
        }
    } catch (error) {
        //console.log('Error al obtener los planetas', error)
        res.setHeader("location", "/404");
        res.statusCode = 302;
        res.end();
        return { props: {} }
    }
}



export default Planetas;
