import React, { useState, useEffect, useContext, createContext } from 'react';

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

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const result = await response.json();

      console.log(result.results);
      
    };

    fetchUsers();
  }, [url]);

  return (
    <UserContext.Provider value={{ user, setUser, url, setUrl }}>
      { children }
    </UserContext.Provider>
  )
}

const useUser = () => {
  return useContext(UserContext);
}

export { UserProvider, useUser };