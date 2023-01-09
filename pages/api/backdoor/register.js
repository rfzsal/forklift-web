const { hash } = require('bcrypt');

const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const id = '111111';
  const username = 'bengkelgajahtunggal';
  const password = await hash('24januari', 10);
  const role = 'mechanic';

  const sql = 'INSERT INTO data_pengguna VALUES (?, ?, ?, ?)';
  const values = [id, username, password, role];

  const [error, rows] = await query(sql, values);
  res.status(200).send({ error, data: rows });
};

export default handler;
