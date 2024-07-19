import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/shared/CardRiwayatPerbaikan';
import Mechanic from 'layouts/Mechanic';
import { usePerbaikan } from 'hooks/usePerbaikan';

const Beranda = () => {
  const perbaikan = usePerbaikan();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <CardRiwayat
            data={perbaikan.riwayat}
          />
        </div>
      </div>
    </>
  );
};

Beranda.layout = Mechanic;

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

export default Beranda;
