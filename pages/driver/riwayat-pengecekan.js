import { useEffect, useState } from 'react';

import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/driver/riwayat-pengecekan/CardRiwayat';
import FilterRiwayat from 'views/driver/riwayat-pengecekan/FilterRiwayat';
import Driver from 'layouts/Driver';
import coreAPI from 'utils/coreAPI';

const RiwayatPengecekan = () => {
  const [riwayat, setRiwayat] = useState(null);

  const refresh = async () => {
    const api = new coreAPI();

    const [error, data] = await api.getRiwayatPengecekan();

    if (error) return setRiwayat([]);
    setRiwayat(data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat data={riwayat} />
    </div>
  );
};

RiwayatPengecekan.layout = Driver;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.user;

    if (!user) {
      return {
        notFound: true,
      };
    }

    if (user.role !== 'driver') {
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

export default RiwayatPengecekan;
