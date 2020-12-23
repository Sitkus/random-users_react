import React, { useState, useContext, createContext } from 'react';

type UserProviderProps = { 
  children: React.ReactNode;
};

interface UserContextProps {
  user: any;
  setUser: any;
  url: string;
  setUrl: any;
};

const UserContext = createContext<UserContextProps>({ user: [], setUser: [], url: '', setUrl: '' });

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [ user, setUser ] = useState([]);
  const [ url, setUrl ] = useState('https://randomuser.me/api/');

  return (
    <UserContext.Provider value={{ user, setUser, url, setUrl }}>
      { children }
    </UserContext.Provider>
  )
}

/**
 * useContext already prepared for use in other files
 */
const useUser = () => {
  return useContext(UserContext);
}

export { UserProvider, useUser };