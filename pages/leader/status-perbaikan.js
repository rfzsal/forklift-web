import { useState, useEffect } from 'react';
import { withSessionSsr } from 'lib/session';
import Leader from 'layouts/Leader';
import CardReview from 'views/leader/CardReview';
import CardRiwayat from 'views/shared/CardRiwayatPerbaikan';
import coreAPI from 'utils/coreAPI';

const StatusPerbaikan = () => {
  const [riwayat, setRiwayat] = useState(null);

  const refresh = async (filter) => {
    const api = new coreAPI();

    const [error, data] = filter
      ? await api.getRiwayatPerbaikan(filter)
      : await api.getRiwayatPerbaikan();

    if (error) return setRiwayat([]);
    setRiwayat(data);
  };

  useEffect(() => {
    refresh();
  }, []);

  const filterRiwayat = () => {
    if (!riwayat) return [];

    const done = riwayat.filter((row) => row.status === 'Sudah Diperbaiki');
    const onGoing = riwayat.filter((row) => row.status === 'Belum Diperbaiki');

    return { done, onGoing };
  };

  return (
    <div className="flex flex-wrap">
      <CardReview data={filterRiwayat().done} />
      <CardRiwayat data={filterRiwayat().onGoing} />
    </div>
  );
};

StatusPerbaikan.layout = Leader;

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

export default StatusPerbaikan;
