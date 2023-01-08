const { useRouter } = require('next/router');
const { useEffect } = require('react');

const Leader = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/leader/beranda');
  }, [router]);

  return null;
};

export default Leader;
