import styled from 'styled-components';

export const Container = styled.header`
  background-color: #381460;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 1fr;
  align-items: center;
`;
export const Logo = styled.h1`
  
`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Notification = styled.img`
  
`;
export const User = styled.img`
  
`;
export const ContainerSearch = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  input{
    border: none;
    padding: 10px;
    width: 70%;
    border-radius: 10px;
  }
`;
