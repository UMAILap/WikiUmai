import styled from 'styled-components';

export const Container = styled.header`
  background-color: #381460;
  padding-top: 20px;
  padding-bottom: 20px;
  max-height:100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ContainerHeader = styled.header`
  display: grid;
  grid-template-columns: 10% 35% 45% 10%;
  grid-template-rows: 1fr;
  align-items: center;
`;
export const Logo = styled.h1``;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Notification = styled.img`

`;

export const User = styled.img`


`;
export const ContainerSearch = styled.div`
  justify-content: left;
  width: 100%;
  display: flex;
  input {
    border: none;
    padding: 10px 20px;
    width: 95%;
    border-radius: 20px;
    height: fit-content;
  }
`;

export const ContainerBotones = styled.div`
width:80%;
justify-content: space-around;
display: flex;
height: fit-content;
`;

export const Link = styled.a`
border-radius: 20px;
background-color:#4d1b84;
padding: 10px 40px;
color: #fff;

`;
