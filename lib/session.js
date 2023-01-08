import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';

const sessionOptions = {
  password: process.env.COOKIE_PASSWORD,
  cookieName: process.env.COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

const withSessionRoute = (handler) => {
  return withIronSessionApiRoute(handler, sessionOptions);
};

const withSessionSsr = (handler) => {
  return withIronSessionSsr(handler, sessionOptions);
};

export { withSessionRoute, withSessionSsr };
