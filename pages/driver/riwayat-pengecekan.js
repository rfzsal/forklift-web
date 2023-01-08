import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/driver/riwayat-pengecekan/CardRiwayat';
import FilterRiwayat from 'views/driver/riwayat-pengecekan/FilterRiwayat';
import Driver from 'layouts/Driver';

const RiwayatPengecekan = () => {
  return (
    <div className="flex flex-wrap">
      <FilterRiwayat />
      <CardRiwayat />
    </div>
  );
};

RiwayatPengecekan.layout = Driver;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.user;

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
