import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks/useAuth';

const Masuk = () => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    Promise.all([auth.logout()])
      .then(() => router.replace('/auth/masuk'))
      .catch(() => router.back());
  }, [router, auth]);

  return null;
};

export default Masuk;
