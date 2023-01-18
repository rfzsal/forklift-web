import { useEffect, useState } from 'react';

import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/shared/CardRiwayatPerbaikan';
import FilterRiwayat from 'views/shared/FilterRiwayatPerbaikan';
import Leader from 'layouts/Leader';
import coreAPI from 'utils/coreAPI';
import { usePerbaikan } from 'hooks/usePerbaikan';

const RiwayatPerbaikan = () => {
  const perbaikan = usePerbaikan();
  const [riwayat, setRiwayat] = useState(null);

  const refresh = async (filter) => {
    const api = new coreAPI();
    const [error, data] = await api.getRiwayatPerbaikan(filter);

    if (error) return setRiwayat([]);
    setRiwayat(data);
  };

  const handleFilter = (values) => {
    refresh(values);
  };

  const handleResetFilter = () => {
    setRiwayat(perbaikan.riwayat);
  };

  useEffect(() => {
    setRiwayat(perbaikan.riwayat);
  }, [perbaikan.riwayat]);

  return (
    <div className="flex flex-wrap">
      <FilterRiwayat
        onFilter={handleFilter}
        onResetFilter={handleResetFilter}
      />

      <CardRiwayat data={riwayat} />
    </div>
  );
};

RiwayatPerbaikan.layout = Leader;

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
