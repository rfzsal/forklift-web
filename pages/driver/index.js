const { useRouter } = require('next/router');
const { useEffect } = require('react');

const Leader = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/driver/beranda');
  }, [router]);

  return null;
};

export default Leader;
