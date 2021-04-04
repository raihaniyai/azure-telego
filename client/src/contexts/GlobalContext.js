import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: node.isRequired,
};

export default GlobalContext;
