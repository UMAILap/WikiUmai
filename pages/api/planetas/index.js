import { api, BASE_URL } from 'utils';

export default async (req, res) => {
  const collection = 'planetas';
  try {
    const { data } = await api.get(`${BASE_URL}/${collection}`);
    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    res.statusCode = 302;
    res.end();
  }
};
