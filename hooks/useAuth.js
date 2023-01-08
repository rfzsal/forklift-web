import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const ProvideAuth = ({ children }) => {
  const authProvider = useProvideAuth();

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      setUser(res.data.user);

      return [null, res.data.user];
    } catch (error) {
      return [error, null];
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUser(null);

      return [null, true];
    } catch (error) {
      return [error, null];
    }
  };

  return { user, login, logout };
};

export { ProvideAuth, useAuth };
