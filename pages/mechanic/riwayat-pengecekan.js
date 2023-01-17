import { useEffect, useState, useRef } from 'react';

import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/shared/riwayat-pengecekan/CardRiwayat';
import FilterRiwayat from 'views/shared/riwayat-pengecekan/FilterRiwayat';
import Mechanic from 'layouts/Mechanic';
import coreAPI from 'utils/coreAPI';

const RiwayatPengecekan = () => {
  const [riwayat, setRiwayat] = useState(null);
  const riwayatRef = useRef(null);

  const refresh = async (filter) => {
    const api = new coreAPI();

    const [error, data] = filter
      ? await api.getRiwayatPengecekan(filter)
      : await api.getRiwayatPengecekan();

    if (error) return setRiwayat([]);

    if (!filter) riwayatRef.current = data;
    setRiwayat(data);
  };

  const handleFilter = (values) => {
    refresh(values);
  };

  const handleResetFilter = () => {
    setRiwayat(riwayatRef.current);
  };

  useEffect(() => {
    refresh();
  }, []);

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

RiwayatPengecekan.layout = Mechanic;

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

export default RiwayatPengecekan;
