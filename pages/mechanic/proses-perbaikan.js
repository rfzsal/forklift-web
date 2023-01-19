import { useState, useEffect } from 'react';
import { withSessionSsr } from 'lib/session';
import Mechanic from 'layouts/Mechanic';
import CardReview from 'views/mechanic/CardReview';

import { usePerbaikan } from 'hooks/usePerbaikan';

const ProsesPerbaikan = () => {
  const perbaikan = usePerbaikan();
  const [riwayat, setRiwayat] = useState(null);

  useEffect(() => {
    setRiwayat(perbaikan.riwayat);
  }, [perbaikan.riwayat]);

  const filterRiwayat = () => {
    if (!riwayat) return [];

    const belumDiperbaiki = riwayat.filter(
      (row) => row.status === 'Belum Diperbaiki'
    );

    return { belumDiperbaiki };
  };

  return (
    <div className="flex flex-wrap">
      <CardReview data={filterRiwayat().belumDiperbaiki} />
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
