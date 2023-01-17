import { withSessionRoute } from 'lib/session';

const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const user = req.session.user;
  if (!user) return res.status(401).end();

  const { from, to, status } = req.query;

  if (!from && !to && !status) {
    const sql = `
    SELECT
    id, id_forklift, nama_mechanic, shift_mechanic, nama_leader, shift_leader, status, UNIX_TIMESTAMP(timestamp) as timestamp
    FROM data_perbaikan
    ORDER BY timestamp DESC
    `;

    const [error, rows] = await query(sql, null);
    if (error) return res.status(500).send(error);

    return res.status(200).send({ data: rows });
  }

  if (from && to && status) {
    let sql = '';

    if (status !== 'Semua Status') {
      sql = `
      SELECT
      id, id_forklift, nama_mechanic, shift_mechanic, nama_leader, shift_leader, status, UNIX_TIMESTAMP(timestamp) as timestamp
      FROM data_perbaikan 
      WHERE status = ?
      AND DATE(timestamp) BETWEEN ? AND ?
      ORDER BY timestamp DESC
      `;
    } else {
      sql = `
      SELECT
      id, id_forklift, nama_mechanic, shift_mechanic, nama_leader, shift_leader, status, UNIX_TIMESTAMP(timestamp) as timestamp
      FROM data_perbaikan 
      WHERE DATE(timestamp) BETWEEN ? AND ?
      ORDER BY timestamp DESC
      `;
    }

    const values = status !== 'Semua Status' ? [status, from, to] : [from, to];

    const [error, rows] = await query(sql, values);
    if (error) return res.status(500).send(error);

    return res.status(200).send({ data: rows });
  }

  if (status) {
    let sql = '';

    if (status !== 'Semua Status') {
      sql = `
      SELECT
      id, id_forklift, nama_mechanic, shift_mechanic, nama_leader, shift_leader, status, UNIX_TIMESTAMP(timestamp) as timestamp
      FROM data_perbaikan 
      WHERE status = ?
      ORDER BY timestamp DESC
      `;
    } else {
      sql = `
      SELECT
      id, id_forklift, nama_mechanic, shift_mechanic, nama_leader, shift_leader, status, UNIX_TIMESTAMP(timestamp) as timestamp
      FROM data_perbaikan
      ORDER BY timestamp DESC
      `;
    }

    const values = status !== 'Semua Status' ? [status] : null;

    const [error, rows] = await query(sql, values);
    if (error) return res.status(500).send(error);

    return res.status(200).send({ data: rows });
  }

  res.status(400).end();
};

export default withSessionRoute(handler);
