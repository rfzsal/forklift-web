const { hash } = require('bcrypt');

const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const { username, role, password } = req.query;
  if (!username || !role || !password) return res.status(400).end();

  const newId = `${Math.floor(100000 + Math.random() * 900000)}`;
  const newPassword = await hash(password, 10);

  const sql = 'INSERT INTO data_pengguna VALUES (?, ?, ?, ?)';
  const values = [newId, username, newPassword, role];

  const [error, rows] = await query(sql, values);
  res.status(200).send({ error, data: rows });
};

export default handler;
