import Axios from 'axios';
import { BASE_URL } from 'utils';
import Router from 'next/router';

const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  function(error) {
    if (401 === error.response.status) {
      Router.push('/login');
    } else {
      return Promise.reject(error);
    }
  },
);
export default api;

export const addBearerToken = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};
export const removeBearerToken = () => {
  delete api.defaults.headers.Authorization;
};

//GET para collections
export const getCollectionBySlug = async (slug, collection, res) => {
  try {
    const response = await api.get(`${BASE_URL}/${collection}?slug=${slug}`);
    const responseData = response.data;
    if (responseData.length) {
      const dataObject = responseData[0];
      return { ...dataObject };
    } else {
      res.setHeader('location', '/404');
      res.statusCode = 302;
      res.end();
      return {};
    }
  } catch (error) {
    //console.log('Error al obtener los planetas', error)
    res.setHeader('location', '/404');
    res.statusCode = 302;
    res.end();
    return {};
  }
};
