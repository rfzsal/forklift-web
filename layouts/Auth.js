import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

const Auth = ({ children }) => {
  const { user, refresh } = useAuth();

  useEffect(() => {
    if (!user) {
      refresh();
      return null;
    }
  }, [user, refresh]);

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
};

export default Auth;
