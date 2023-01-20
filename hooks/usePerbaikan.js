import { createContext, useContext, useEffect, useState } from 'react';
import coreAPI from 'utils/coreAPI';

const PerbaikanContext = createContext(null);

const ProvidePerbaikan = ({ children }) => {
  const perbaikanProvider = useProvidePerbaikan();

  return (
    <PerbaikanContext.Provider value={perbaikanProvider}>
      {children}
    </PerbaikanContext.Provider>
  );
};

const usePerbaikan = () => useContext(PerbaikanContext);

const useProvidePerbaikan = () => {
  const [riwayat, setRiwayat] = useState(null);

  const refresh = async () => {
    try {
      const util = new coreAPI();
      const [error, data] = await util.getRiwayatPerbaikan();

      if (error) return setRiwayat([]);
      setRiwayat(data);
    } catch (error) {
      setRiwayat([]);
      return [error, null];
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      refresh();
    }, 15 * 1000);

    return () => clearInterval(loop);
  }, []);

  return { riwayat, refresh };
};

export { ProvidePerbaikan, usePerbaikan };
