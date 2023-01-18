import { createContext, useContext, useEffect, useState } from 'react';
import coreAPI from 'utils/coreAPI';

const PengecekanContext = createContext(null);

const ProvidePengecekan = ({ children }) => {
  const pengecekanProvider = useProvidePengecekan();

  return (
    <PengecekanContext.Provider value={pengecekanProvider}>
      {children}
    </PengecekanContext.Provider>
  );
};

const usePengecekan = () => useContext(PengecekanContext);

const useProvidePengecekan = () => {
  const [riwayat, setRiwayat] = useState(null);

  const refresh = async () => {
    try {
      const util = new coreAPI();
      const [error, data] = await util.getRiwayatPengecekan();

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
    }, 60 * 1000);

    return () => clearInterval(loop);
  }, []);

  return { riwayat };
};

export { ProvidePengecekan, usePengecekan };
