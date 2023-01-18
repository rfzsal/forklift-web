import { useState, useEffect } from 'react';
import { withSessionSsr } from 'lib/session';
import Mechanic from 'layouts/Mechanic';
import CardReview from 'views/mechanic/CardReview';
import coreAPI from 'utils/coreAPI';

const ProsesPerbaikan = () => {
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

    const onGoing = riwayat.filter((row) => row.status === 'Belum Diperbaiki');

    return { onGoing };
  };

  return (
    <div className="flex flex-wrap">
      <CardReview data={filterRiwayat().onGoing} />
    </div>
  );
};

ProsesPerbaikan.layout = Mechanic;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.user;

    if (!user) {
      return {
        notFound: true,
      };
    }

    if (user.role !== 'mechanic') {
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

export default ProsesPerbaikan;
