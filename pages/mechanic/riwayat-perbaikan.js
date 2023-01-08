import { withSessionSsr } from 'lib/session';
import FilterRiwayat from 'views/mechanic/riwayat-perbaikan/FilterRiwayat';
import CardRiwayat from 'views/mechanic/riwayat-perbaikan/CardRiwayat';
import Mechanic from 'layouts/Mechanic';

const RiwayatPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPerbaikan.layout = Mechanic;

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

export default RiwayatPerbaikan;
