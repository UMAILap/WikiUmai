import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Container = styled.header`
  background-color: #381460;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const ContainerLogo = styled.div`
  width: 20%;
  float: left;
`;
export const ContainerUser = styled.div`
  width: 20%;
  float: right;
  img {
    float: right;
  }
`;
export const ContainerSearch = styled.div`
  width: 50%;
  margin: 0 5% 0 5%;
  float: left;
  input {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 10px;
  }
`;
