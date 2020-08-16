import { api } from 'utils';
import { routes } from 'utils';
import { serialize } from 'cookie';

export default (req, res) => {
  const { identifier, password } = req.body;
  api
    .post(`${routes.login}`, { identifier, password })
    .then(response => {
      const token = response.data.jwt;
      const user = response.data.user
      res.setHeader(
        'Set-Cookie',
        serialize('token', token, { path: '/', httpOnly: true }),
      );
      res.statusCode = 200;
      res.json({ message: 'Bienvenido', user: user });
    })
    .catch(error => {
      res.statusCode = 401;
      res.json({ message: 'Usuario o contraseña erronea', user: null });
    });
};
