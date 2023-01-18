import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/shared/CardRiwayatPengecekan';
import Leader from 'layouts/Leader';

const Beranda = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <CardRiwayat />
        </div>
      </div>
    </>
  );
};

Beranda.layout = Leader;

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

export default Beranda;
