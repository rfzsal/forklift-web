import { withSessionRoute } from 'lib/session';

const handler = async (req, res) => {
  res.status(200).send({ user: req.session.user });
};

export default withSessionRoute(handler);
