const { hash } = require('bcrypt');

const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const { username, role } = req.query;
  if (!username || !role) return res.status(400).end();

  const id = `${Math.floor(100000 + Math.random() * 900000)}`;
  const password = await hash(username, 10);

  const sql = 'INSERT INTO data_pengguna VALUES (?, ?, ?, ?)';
  const values = [id, username, password, role];

  const [error, rows] = await query(sql, values);
  res.status(200).send({ error, data: rows });
};

export default handler;
