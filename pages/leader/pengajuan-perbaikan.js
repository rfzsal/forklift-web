import { withSessionSsr } from 'lib/session';
import Leader from 'layouts/Leader';
import CardPengajuan from 'views/leader/pengajuan-perbaikan/CardPengajuan';

const PengajuanPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <CardPengajuan />
    </div>
  );
};

PengajuanPerbaikan.layout = Leader;

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

export default PengajuanPerbaikan;
