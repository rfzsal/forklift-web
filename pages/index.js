import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/auth/masuk');
  }, [router]);

  return null;
};

export default Home;
