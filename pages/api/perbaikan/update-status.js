import { format } from 'date-fns';

import { withSessionRoute } from 'lib/session';
const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const user = req.session.user;
  if (!user) return res.status(401).end();
  if (user.role !== 'mechanic' && user.role !== 'leader')
    return res.status(401).end();

  if (req.method !== 'POST') return res.status(405).end();

  const { mechanic, leader, status } = req.body;

  if (!status) return res.status(400).end();
  if (!mechanic && !leader) return res.status(400).end();

  const { id } = req.query;
  if (!status) return res.status(400).end();

  const currentTimestamp = Date.now();

  let sql = `UPDATE data_perbaikan
  SET status=?, timestamp=?, `;

  if (mechanic) {
    sql += 'nama_mechanic=?, shift_mechanic=? ';
  }

  if (leader) {
    sql += 'nama_leader=?, shift_leader=? ';
  }

  sql += 'WHERE id=?';

  const values = [status, format(currentTimestamp, 'yyyy-MM-dd HH:mm:ss')];

  if (mechanic) {
    values.push(mechanic.name);
    values.push(mechanic.shift);
  }

  if (leader) {
    values.push(leader.name);
    values.push(leader.shift);
  }

  values.push(id);

  const [error] = await query(sql, values);
  if (error) return res.status(500).send({ error });

  res.status(200).end();
};

export default withSessionRoute(handler);
