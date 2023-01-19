const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const sql = 'DELETE FROM data_pengecekan WHERE 1=1';

  const [error, rows] = await query(sql, null);
  res.status(200).send({ error, data: rows });
};

export default handler;
