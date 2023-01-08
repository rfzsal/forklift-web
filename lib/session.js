import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';

const sessionOptions = {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_cookiename',
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
