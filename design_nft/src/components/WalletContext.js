import React, { createContext, useState } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [userAddress, setUserAddress] = useState('');
  
    return (
      <WalletContext.Provider value={{ userAddress, setUserAddress }}>
        {children}
      </WalletContext.Provider>
    );
  };