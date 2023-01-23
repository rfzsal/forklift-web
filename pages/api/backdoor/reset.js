const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const [error1] = await query('DELETE FROM data_pengguna WHERE 1=1', null);
  const [error2] = await query('DELETE FROM data_pengecekan WHERE 1=1', null);

  res.status(200).send({ error: [error1, error2], data: 'Ok' });
};

export default handler;
