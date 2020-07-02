import React, { useState } from 'react';

import {
    ListaPerfilContainer,
    ListaPerfilTitulo,
    ListaPerfilItem
} from './styles';

function ListaPerfil(props) {
    const {
        type,
        titulos
    } = props;

    const ListItem = titulos.map(titulo => <ListaPerfilItem><img src={type ? './historias.png' : './discusiones.png'}></img><p>{titulo}</p></ListaPerfilItem >);
    return (
        <ListaPerfilContainer>
            <ListaPerfilTitulo>{type ? 'Mis historias' : 'Mis discusiones'}</ListaPerfilTitulo>
            {/* RECORRO ARRAYTITULOS Y CREO UN <ListaPerfilItem> POR CADA UNO */}
            {ListItem}
        </ListaPerfilContainer >
    );
}

export default ListaPerfil;