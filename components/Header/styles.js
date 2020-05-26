import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Container = styled.header`
  background-color: #381460;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  @media (min-width: ${breakpoints.mobile}) {

  }
  @media (min-width: ${breakpoints.mobileGrande}) {
     
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  display: grid;  
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 1fr;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 10px 0;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: 15% 30% 40% 15%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    grid-template-columns: 10% 35% 45% 10%;
  }
  @media (min-width: ${breakpoints.notebook}) {
    
  }
`;

export const Logo = styled.h1`
  width: 100%;
  img{
    width: 50%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    img{
      width: 40%;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    img{
      width: 100%;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 80%;
  }

`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  @media (min-width: ${breakpoints.mobileGrande}){
    justify-content: start; 
  }
  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-between;
  }
  @media (min-width: ${breakpoints.laptop}){
    justify-content: flex-end;
    align-items: center;
  }
`;

export const User = styled.img`
  display: none;
  @media (min-width: ${breakpoints.mobile}){

  }
  @media (min-width: ${breakpoints.tablet}){
    display: none;
 }
  @media (min-width: ${breakpoints.laptop}){
    width: 30%;
    display: block;
 }
`;

export const MenuHamburguesa = styled.h1`
  display: block;
  max-width: 50%;
  @media (min-width: ${breakpoints.mobile}) {
    display: block;
  }
  @media (min-width: ${breakpoints.tablet}) {
    img{
      width: 95%;
    }    
  }
  @media (min-width: ${breakpoints.laptop}){
    display:none;
  }
`;
export const ContainerSearch = styled.div`
  display: none;
  @media (min-width: ${breakpoints.mobile}) {

  }
  @media (min-width: ${breakpoints.mobileGrande}) {

  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    display: flex;
    justify-content: center;
    input {
      border: none;
      display: block;
      padding: 10px 20px;
      width: 90%;
      border-radius: 20px;
      height: fit-content;
    }
  }
  @media (min-width: ${breakpoints.notebook}){
    display: flex;
  }
`;

export const Search = styled.a`
  width: 30%;
  display: block;
  img{
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    display:none;
  } 
`;

export const Notification = styled.img`
  width: 30%;
  @media (min-width: ${breakpoints.mobile}){

  }
  @media (min-width: ${breakpoints.mobileGrande}){
    width: 50%;
  }
  @media (min-width: ${breakpoints.tablet}){
    width: 40%;
  }
  @media (min-width: ${breakpoints.laptop}){
    width: 30%;
    margin-right: 10px;
  }
  @media (min-width: ${breakpoints.laptopL}){
    width: 25%;
  }
`;

export const ContainerBotones = styled.div`
  display: none;
  @media (min-width: 376px) {

  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;    
    height: fit-content;  
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Link = styled.a`
@media (min-width: ${breakpoints.laptop}) {
border-radius: 20px;
background-color:#4d1b84;
padding: 10px 25px;
color: #fff;
}
@media (min-width: ${breakpoints.laptopL}) {
padding: 10px 40px;
}
`;
