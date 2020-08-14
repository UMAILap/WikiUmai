import { api } from 'utils';
import { BASE_URL, routes } from 'utils';
import { serialize } from 'cookie';

export default (req, res) => {
  const { identifier, password } = req.body;
  console.log('identi', req.body);
  api
    .post(`${routes.login}`, { identifier, password })
    .then(response => {
      const token = response.data.jwt;
      res.setHeader(
        'Set-Cookie',
        serialize('token', token, { path: '/', httpOnly: true }),
      );
      res.statusCode = 200;
      res.json({ message: 'user loggged' });
    })
    .catch(error => {
      console.log(error);
      res.statusCode = 401;
      res.json({ message: 'user not logged' });
    });
};
