import { createContext, useContext } from 'react';
import axios from 'axios';

const RiwayatContext = createContext();

const ProvideRiwayat = ({ children }) => {
  const riwayatProvider = useProvideRiwayat();

  return (
    <RiwayatContext.Provider value={riwayatProvider}>
      {children}
    </RiwayatContext.Provider>
  );
};

const useRiwayat = () => useContext(RiwayatContext);

const useProvideRiwayat = () => {
  const add = async (data) => {
    try {
      await axios.post('/api/riwayat/add', data);

      return [null, true];
    } catch (error) {
      return [error, null];
    }
  };

  return { add };
};

export { ProvideRiwayat, useRiwayat };
