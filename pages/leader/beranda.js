import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/shared/CardRiwayatPengecekan';
import CardRiwayatPerbaikan from 'views/shared/CardRiwayatPerbaikan';
import Leader from 'layouts/Leader';
import { usePengecekan } from 'hooks/usePengecekan';
import { usePerbaikan } from 'hooks/usePerbaikan';

const Beranda = () => {
  const pengecekan = usePengecekan();
  const perbaikan = usePerbaikan();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <CardRiwayat
            data={pengecekan.riwayat}
          />
        </div>

        <div className="w-full mt-6">
          <CardRiwayatPerbaikan
            hideActionButton
            data={perbaikan.perbaikan}
          />
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
