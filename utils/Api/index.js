import Axios from 'axios';
import { BASE_URL } from 'utils'
import Router from 'next/router';

const api = Axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

api.interceptors.response.use(response => response, function (error) {
    if (401 === error.response.status) {
        Router.push('/login')
    } else {
        return Promise.reject(error);
    }
});

export const addBearerToken = (token) => {
    api.defaults.headers.Authorization = `Bearer ${token}`
}
export const removeBearerToken = () => {
    delete api.defaults.headers.Authorization;
}

export default api;