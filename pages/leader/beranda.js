import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/leader/riwayat-pengecekan/CardRiwayat';
import CardKomponen from 'views/beranda/CardKomponen';
import Leader from 'layouts/Leader';

const Beranda = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-4 xl:mb-0">
          <CardRiwayat />
        </div>
        <div className="w-full xl:w-4/12">
          <CardKomponen />
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
