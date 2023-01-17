import { withSessionRoute } from 'lib/session';

const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const user = req.session.user;
  if (!user) return res.status(401).end();

  const { id, from, to, status } = req.query;

  if (!id && !from && !to && !status) {
    const sql = `
    SELECT
    id, id_forklift, nama_driver, shift_driver, status, UNIX_TIMESTAMP(timestamp) as timestamp
    FROM data_pengecekan
    ORDER BY timestamp DESC
    `;

    const [error, rows] = await query(sql, null);
    if (error) return res.status(500).send(error);

    return res.status(200).send({ data: rows });
  }

  if (id) {
    const sql = `
    SELECT
    data_pengecekan.id,
    data_pengecekan.id_forklift,
    data_pengecekan.nama_driver,
    data_pengecekan.shift_driver,
    data_pengecekan.status,
    data_pengecekan.timestamp,
    detail_pengecekan.ban AS keterangan_ban,
    detail_pengecekan.fork AS keterangan_fork,
    detail_pengecekan.seat_belt AS keterangan_seat_belt,
    detail_pengecekan.lampu_depan_belakang AS keterangan_lampu_depan_belakang,
    detail_pengecekan.rem_tangan_kaki AS keterangan_rem_tangan_kaki,
    detail_pengecekan.lampu_sein AS keterangan_lampu_sein,
    detail_pengecekan.klakson AS keterangan_klakson,
    detail_pengecekan.alarm_mundur AS keterangan_alarm_mundur,
    detail_pengecekan.lampu_sirine AS keterangan_lampu_sirine,
    detail_pengecekan.tempat_duduk AS keterangan_tempat_duduk,
    detail_pengecekan.kaca_spion AS keterangan_kaca_spion,
    detail_pengecekan.apar AS keterangan_apar,
    detail_pengecekan.oli AS keterangan_oli,
    detail_pengecekan.kebersihan AS keterangan_kebersihan
    FROM data_pengecekan
    INNER JOIN detail_pengecekan
    ON data_pengecekan.id = detail_pengecekan.id
    WHERE data_pengecekan.id = ?
    `;

    const values = [id];

    const [error, rows] = await query(sql, values);
    if (error) return res.status(500).send(error);

    return res.status(200).send({ data: rows });
  }

  if (from && to && status) {
    const sql = `
    SELECT
    id, id_forklift, nama_driver, shift_driver, status, UNIX_TIMESTAMP(timestampp)
    FROM data_pengecekan 
    WHERE status = ?
    AND timestamp BETWEEN FROM_UNIXTIME(?) AND FROM_UNIXTIME(?)
    ORDER BY timestamp DESC
    `;

    const values = [status, from, to];

    const [error, rows] = await query(sql, values);
    if (error) return res.status(500).send(error);

    return res.status(200).send({ data: rows });
  }

  res.status(400).end();
};

export default withSessionRoute(handler);
