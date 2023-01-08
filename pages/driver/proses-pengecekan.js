import { withSessionSsr } from 'lib/session';
import Driver from 'layouts/Driver';
import CardPengecekan from 'views/driver/proses-pengecekan/CardPengecekan';

const ProsesPengecekan = () => {
  return (
    <div className="flex flex-wrap">
      <CardPengecekan />
    </div>
  );
};

ProsesPengecekan.layout = Driver;

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

export default ProsesPengecekan;
