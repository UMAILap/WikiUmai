import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    ListaPerfilContainer,
    ListaPerfilTitulo,
    ListaPerfilItem
} from './styles';

function ListaPerfil({ type, titulos }) {
    const ListItem = titulos.map(titulo => <ListaPerfilItem><img src={type === 'historias' ? '/historias.svg' : '/discusiones.svg'}></img><p>{titulo}</p></ListaPerfilItem >);
    return (
        <ListaPerfilContainer>
            <ListaPerfilTitulo>{`Mis ${type}`}</ListaPerfilTitulo>
            {/* RECORRO ARRAYTITULOS Y CREO UN <ListaPerfilItem> POR CADA UNO */}
            {ListItem}
        </ListaPerfilContainer >
    );
}

ListaPerfil.propTypes = {
    type: PropTypes.string.isRequired,
    titulos: PropTypes.array
}

ListaPerfil.defaultProps = {
    titulos: []
}

export default ListaPerfil;