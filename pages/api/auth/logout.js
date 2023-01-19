import { withSessionRoute } from 'lib/session';

const handler = (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  req.session.destroy();
  res.status(200).send({ user: req.session.user });
};

export default withSessionRoute(handler);
