import { withSessionSsr } from 'lib/session';
import CardRiwayat from 'views/shared/CardRiwayatPengecekan';
import Mechanic from 'layouts/Mechanic';
import { usePengecekan } from 'hooks/usePengecekan';

const Beranda = () => {
  const pengecekan = usePengecekan();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <CardRiwayat
            hideActionButton
            data={pengecekan.riwayat?.slice(0, 5)}
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
