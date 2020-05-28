import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const VioletaBoton = styled.a`
font-family:"Proxima Nova";
border-radius: 20px;
background-color:#4d1b84;
padding: 5px 5px;
color: #fff;
font-size: 5px;
@media (min-width: ${breakpoints.mobile}) {
    padding: 15px 25px;
}

@media (min-width: ${breakpoints.tablet}) {
padding: 10px 40px;
margin: 2%;
padding: 5px 15px;
font-size: 10px;
}
@media (min-width: ${breakpoints.laptop}) {
padding: 10px 40px;
margin: 2%;
padding: 10px 25px;
font-size: 12px;
}

`;
