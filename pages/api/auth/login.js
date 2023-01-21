import { compare } from 'bcrypt';

import { withSessionRoute } from 'lib/session';
import { query } from 'lib/server/mysql';

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body;
  if (!username || !password) return res.status(400).end();

  const sql = 'SELECT * FROM data_pengguna WHERE nama = ?';
  const values = [username];

  const [error, rows] = await query(sql, values);
  if (error) return res.status(500).end();
  if (rows.length === 0) return res.status(401).end();

  if (username !== rows[0].nama) return res.status(401).end();

  const isValid = await compare(password, rows[0].kata_sandi);
  if (!isValid) return res.status(401).end();

  const { nama, role } = rows[0];
  req.session.user = { name: nama, role };
  await req.session.save();

  res.status(200).send({ user: req.session.user });
};

export default withSessionRoute(handler);
