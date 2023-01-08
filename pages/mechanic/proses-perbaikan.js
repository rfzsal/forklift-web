import { withSessionSsr } from 'lib/session';
import CardPerbaikan from 'views/mechanic/proses-perbaikan/CardPerbaikan';
import Mechanic from 'layouts/Mechanic';

const ProsesPerbaikan = () => {
  return (
    <div className="flex flex-wrap">
      <CardPerbaikan />
    </div>
  );
};

ProsesPerbaikan.layout = Mechanic;

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

export default ProsesPerbaikan;
