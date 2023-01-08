const { useRouter } = require('next/router');
const { useEffect } = require('react');

const Driver = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/driver/beranda');
  }, [router]);

  return null;
};

export default Driver;
