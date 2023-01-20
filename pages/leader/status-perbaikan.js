import { useState, useEffect } from 'react';

import { withSessionSsr } from 'lib/session';
import Leader from 'layouts/Leader';
import CardReview from 'views/leader/CardReview';
import { usePerbaikan } from 'hooks/usePerbaikan';

const StatusPerbaikan = () => {
  const perbaikan = usePerbaikan();
  const [riwayat, setRiwayat] = useState(null);

  useEffect(() => {
    setRiwayat(perbaikan.riwayat);
  }, [perbaikan.riwayat]);

  const filterRiwayat = () => {
    if (!riwayat) return [];

    const sudahDiperbaiki = riwayat.filter(
      (row) => row.status === 'Sudah Diperbaiki'
    );

    return sudahDiperbaiki;
  };

  return (
    <div className="flex flex-wrap">
      <CardReview data={filterRiwayat()} />
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
