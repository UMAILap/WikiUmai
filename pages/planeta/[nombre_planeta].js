import React from 'react';
import { api } from 'utils';
import { BASE_URL, routes } from 'utils';
import { Layout, Planetas as PlanetasContainer } from 'containers';

function Planetas(props) {
    return (
        <Layout>
            <PlanetasContainer data={props} />
        </Layout>
    );
}

//Agregado Lean WIP.
export async function getServerSideProps(ctx) {
    const { nombre_planeta } = ctx.query;

    //console.log('PARAMETRO',ctx.params)
    //try {
        const response = await api.get(`${BASE_URL}/planetas?slug=${nombre_planeta}`)
        console.log(`${BASE_URL}/planetas?slug=${nombre_planeta}`)
        const responseData = response.data
       const dataObject = responseData[0]
        console.log('daob',responseData[0]) 
       return { props: {...dataObject} }

       //TO BE CONTINUED... Redirigir a 404 si no devuelve data.
        
//} catch (error) {
        //console.log('Error al obtener los planetas', errror)
    //    return { props:{}} 
  //  }  
    
  }



export default Planetas;
