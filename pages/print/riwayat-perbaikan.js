import { useEffect, useState } from 'react';
import { withSessionSsr } from 'lib/session';
import { useRouter } from 'next/router';

import CardDetail from 'views/print/CardDetail';
import coreAPI from 'utils/coreAPI';

const RiwayatPerbaikan = () => {
  const router = useRouter();
  const { id } = router.query;

  const [riwayat, setRiwayat] = useState(null);

  const part = [
    { name: 'Ban', long_name: 'keterangan_ban' },
    { name: 'Fork', long_name: 'keterangan_fork' },
    { name: 'Seat Belt', long_name: 'keterangan_seat_belt' },
    {
      name: 'Lampu Depan dan Belakang',
      long_name: 'keterangan_lampu_depan_belakang',
    },
    { name: 'Rem Tangan dan Kaki', long_name: 'keterangan_rem_tangan_kaki' },
    { name: 'Lampu Sein', long_name: 'keterangan_lampu_sein' },
    { name: 'Klakson', long_name: 'keterangan_klakson' },
    { name: 'Alarm Mundur', long_name: 'keterangan_alarm_mundur' },
    { name: 'Lampu Sirine', long_name: 'keterangan_lampu_sirine' },
    { name: 'Tempat Duduk', long_name: 'keterangan_tempat_duduk' },
    { name: 'Kaca Spion', long_name: 'keterangan_kaca_spion' },
    { name: 'APAR', long_name: 'keterangan_apar' },
    { name: 'Oli', long_name: 'keterangan_oli' },
    { name: 'Kebersihan', long_name: 'keterangan_kebersihan' },
  ];

  const createDate = () => {
    if (!riwayat) return null;

    return riwayat[0].timestamp;
  };

  const createDataDriver = () => {
    if (!riwayat) return null;

    return { nama: riwayat[0].nama_driver, shift: riwayat[0].shift_driver };
  };

  const createDataForklift = () => {
    if (!riwayat) return null;

    return riwayat[0].id_forklift;
  };

  const createDataPengecekan = () => {
    if (!riwayat) return [];

    const data = [];
    part.forEach((row) => {
      if (riwayat[0][row.long_name]) {
        data.push({
          nama: row.name,
          status: 'Kurang Baik',
          keterangan: riwayat[0][row.long_name],
        });
      }
    });

    return data;
  };

  useEffect(() => {
    const refresh = async () => {
      const util = new coreAPI();
      const [error, data] = await util.getRiwayatPengecekanByID(id);

      if (error) return setRiwayat([]);
      setRiwayat(data);
    };

    refresh();
  }, [id]);

  return (
    <div className="container flex flex-wrap mx-auto">
      <CardDetail
        date={createDate()}
        dataDriver={createDataDriver()}
        dataForklift={createDataForklift()}
        dataPengecekan={createDataPengecekan()}
      />
    </div>
  );
};

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.user;

    if (!user) {
      return {
        notFound: true,
      };
    }

    if (user.role !== 'leader') {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  }
);

export default RiwayatPerbaikan;
