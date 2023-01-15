const { query } = require('lib/server/mysql');

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    namaDriver,
    shiftDriver,
    idForklift,
    keteranganBan,
    keteranganFork,
    keteranganSeatBelt,
    keteranganLampuDepanBelakang,
    keteranganRemTanganKaki,
    keteranganLampuSein,
    keteranganKlakson,
    keteranganAlarmMundur,
    keteranganLampuSirine,
    keteranganTempatDuduk,
    keteranganKacaSpion,
    keteranganApar,
    keteranganOli,
    keteranganKebersihan,
  } = req.body;

  if (!namaDriver || !shiftDriver || !idForklift) return res.status(400).end();

  let status;
  if (
    keteranganBan ||
    keteranganFork ||
    keteranganSeatBelt ||
    keteranganLampuDepanBelakang ||
    keteranganRemTanganKaki ||
    keteranganLampuSein ||
    keteranganKlakson ||
    keteranganAlarmMundur ||
    keteranganLampuSirine ||
    keteranganTempatDuduk ||
    keteranganKacaSpion ||
    keteranganApar ||
    keteranganOli ||
    keteranganKebersihan
  ) {
    status = 'Kurang Baik';
  }

  const id = Math.floor(100000000 + Math.random() * 900000000);

  const sql1 = `INSERT INTO data_pengecekan VALUES (?, ?, ?, ?, ?, NULL)`;
  const values1 = [id, idForklift, namaDriver, shiftDriver, status];

  const sql2 =
    'INSERT INTO detail_pengecekan VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values2 = [
    id,
    keteranganBan,
    keteranganFork,
    keteranganSeatBelt,
    keteranganLampuDepanBelakang,
    keteranganRemTanganKaki,
    keteranganLampuSein,
    keteranganKlakson,
    keteranganAlarmMundur,
    keteranganLampuSirine,
    keteranganTempatDuduk,
    keteranganKacaSpion,
    keteranganApar,
    keteranganOli,
    keteranganKebersihan,
  ];

  const [error1] = await query(sql1, values1);
  const [error2] = await query(sql2, values2);
  if (error1 || error2) return res.status(500).send({ error1, error2 });

  res.status(200).end();
};

export default handler;
