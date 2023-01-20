import { format } from 'date-fns';

import { withSessionRoute } from 'lib/session';
const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  const user = req.session.user;
  if (!user) return res.status(401).end();
  if (user.role !== 'driver') return res.status(401).end();

  if (req.method !== 'POST') return res.status(405).end();

  const {
    namaDriver,
    shiftDriver,
    idForklift,
    ban,
    keteranganBan,
    fork,
    keteranganFork,
    seatBelt,
    keteranganSeatBelt,
    lampuDepanBelakang,
    keteranganLampuDepanBelakang,
    remTanganKaki,
    keteranganRemTanganKaki,
    lampuSein,
    keteranganLampuSein,
    klakson,
    keteranganKlakson,
    alarmMundur,
    keteranganAlarmMundur,
    lampuSirine,
    keteranganLampuSirine,
    tempatDuduk,
    keteranganTempatDuduk,
    kacaSpion,
    keteranganKacaSpion,
    apar,
    keteranganApar,
    oli,
    keteranganOli,
    kebersihan,
    keteranganKebersihan,
  } = req.body;

  if (!namaDriver || !shiftDriver || !idForklift) return res.status(400).end();

  let status = 'Baik';
  if (
    ban === 'Kurang Baik' ||
    fork === 'Kurang Baik' ||
    seatBelt === 'Kurang Baik' ||
    lampuDepanBelakang === 'Kurang Baik' ||
    remTanganKaki === 'Kurang Baik' ||
    lampuSein === 'Kurang Baik' ||
    klakson === 'Kurang Baik' ||
    alarmMundur === 'Kurang Baik' ||
    lampuSirine === 'Kurang Baik' ||
    tempatDuduk === 'Kurang Baik' ||
    kacaSpion === 'Kurang Baik' ||
    apar === 'Kurang Baik' ||
    oli === 'Kurang Baik' ||
    keteranganKebersihan
  ) {
    status = 'Kurang Baik';
  }

  const id = Math.floor(100000000 + Math.random() * 900000000);
  const currentTimestamp = Date.now();

  const sql1 = `INSERT INTO data_pengecekan VALUES (?, ?, ?, ?, ?, ?)`;
  const values1 = [
    id,
    idForklift,
    namaDriver,
    shiftDriver,
    status,
    format(currentTimestamp, 'yyyy-MM-dd HH:mm:ss'),
  ];

  const sql2 = `INSERT INTO data_perbaikan VALUES(?, ?, NULL, NULL, NULL, NULL, 'Belum Diperbaiki', ?)`;
  const values2 = [
    id,
    idForklift,
    format(currentTimestamp, 'yyyy-MM-dd HH:mm:ss'),
  ];

  const sql3 =
    'INSERT INTO detail_pengecekan VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values3 = [
    id,
    ban === 'Kurang Baik' ? keteranganBan || 'Ada kerusakan' : null,
    fork === 'Kurang Baik' ? keteranganFork || 'Ada kerusakan' : null,
    seatBelt === 'Kurang Baik' ? keteranganSeatBelt || 'Ada kerusakan' : null,
    lampuDepanBelakang === 'Kurang Baik'
      ? keteranganLampuDepanBelakang || 'Ada kerusakan'
      : null,
    remTanganKaki === 'Kurang Baik'
      ? keteranganRemTanganKaki || 'Ada kerusakan'
      : null,
    lampuSein === 'Kurang Baik' ? keteranganLampuSein || 'Ada kerusakan' : null,
    klakson === 'Kurang Baik' ? keteranganKlakson || 'Ada kerusakan' : null,
    alarmMundur === 'Kurang Baik'
      ? keteranganAlarmMundur || 'Ada kerusakan'
      : null,
    lampuSirine === 'Kurang Baik'
      ? keteranganLampuSirine || 'Ada kerusakan'
      : null,
    tempatDuduk === 'Kurang Baik'
      ? keteranganTempatDuduk || 'Ada kerusakan'
      : null,
    kacaSpion === 'Kurang Baik' ? keteranganKacaSpion || 'Ada kerusakan' : null,
    apar === 'Kurang Baik' ? keteranganApar || 'Ada kerusakan' : null,
    oli === 'Kurang Baik' ? keteranganOli || 'Ada kerusakan' : null,
    kebersihan === 'Kurang Baik'
      ? keteranganKebersihan || 'Kendaraan kotor'
      : null,
  ];

  const [error1] = await query(sql1, values1);

  const [error2] =
    status === 'Kurang Baik' ? await query(sql2, values2) : [null];

  const [error3] = await query(sql3, values3);

  if (error1 || error2 || error3)
    return res.status(500).send({ error1, error3 });

  res.status(200).end();
};

export default withSessionRoute(handler);
