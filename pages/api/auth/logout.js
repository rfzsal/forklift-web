import { withSessionRoute } from 'lib/session';

const handler = (req, res) => {
  req.session.destroy();
  res.status(200).send({ user: req.session.user });
};

export default withSessionRoute(handler);
