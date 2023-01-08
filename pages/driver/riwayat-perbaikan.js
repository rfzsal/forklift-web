import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/driver/riwayat-perbaikan/CardRiwayat';
import FilterRiwayat from 'views/driver/riwayat-perbaikan/FilterRiwayat';
import Driver from 'layouts/Driver';

const RiwayatPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPerbaikan.layout = Driver;

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

export default RiwayatPerbaikan;
