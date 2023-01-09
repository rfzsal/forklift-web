import { useState } from 'react';
import { useRouter } from 'next/router';

import { withSessionSsr } from 'lib/session';
import { useAuth } from 'hooks/useAuth';
import Auth from 'layouts/Auth.js';

const Masuk = () => {
  const router = useRouter();
  const auth = useAuth();

  const [values, setValues] = useState({
    username: '',
    password: '',
    loading: false,
  });

  const handleChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };

  const handleLogin = async () => {
    if (values.loading) return;
    if (!values.username || !values.password) return;

    setValues({ ...values, loading: true });
    const [error, user] = await auth.login(values.username, values.password);
    setValues({ ...values, loading: false });

    if (error) {
      alert('Nama Pengguna atau Kata Sandi salah.');
    } else {
      router.replace(`/${user.role.toLowerCase()}`);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-8">
                <img
                  alt="..."
                  src="/img/logo.png"
                  className="mx-auto max-w-120-px mb-6"
                />

                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nama Pengguna
                    </label>
                    <input
                      disabled={values.loading}
                      value={values.username}
                      onChange={handleChange('username')}
                      type="text"
                      className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                      placeholder="Nama Pengguna"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Kata Sandi
                    </label>
                    <input
                      disabled={values.loading}
                      value={values.password}
                      onChange={handleChange('password')}
                      type="password"
                      className="border border-blueGray-300 px-3 py-3 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-indigo-200"
                      placeholder="Kata Sandi"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      disabled={values.loading}
                      onClick={handleLogin}
                      className="w-full bg-indigo-500 text-white active:bg-indigo-600 font-semibold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      {values.loading ? (
                        <span>
                          <i className="fas fa-circle-notch animate-spin mx-auto text-sm mr-1"></i>{' '}
                          <span>Masuk</span>
                        </span>
                      ) : (
                        'Masuk'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Masuk.layout = Auth;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (user) {
      return {
        redirect: {
          permanent: false,
          destination: `/${user.role}`,
        },
      };
    }

    return {
      props: {},
    };
  }
);

export default Masuk;
