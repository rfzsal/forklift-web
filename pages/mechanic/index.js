const { useRouter } = require('next/router');
const { useEffect } = require('react');

const Mechanic = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/mechanic/beranda');
  }, [router]);

  return null;
};

export default Mechanic;
