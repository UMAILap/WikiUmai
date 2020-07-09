import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Titulos } from 'components';
import {
    ListaPerfilContainer,
    ListaPerfilItem
} from './styles';

function ListaPerfil({ contribuciones }) {
    //Contribuciones es un array con objetos que guardan tipo y titulo de cada contribución
    const ListItem = contribuciones.map(contribucion => <ListaPerfilItem><img src={contribucion.tipo === 'historia' ? '/historias.svg' : '/discusiones.svg'}></img><p>{contribucion.titulo}</p></ListaPerfilItem >);
    return (
        <ListaPerfilContainer>
            <Titulos>Mis contribuciones</Titulos>
            {/* RECORRO ARRAYCONTRIBUCIONES Y CREO UN <ListaPerfilItem> POR CADA UNA */}
            {ListItem}
        </ListaPerfilContainer >
    );
}

ListaPerfil.propTypes = {
    contribuciones: PropTypes.array
}

ListaPerfil.defaultProps = {
    contribuciones: []
}

export default ListaPerfil;