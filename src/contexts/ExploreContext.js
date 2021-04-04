import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

const ExploreContext = createContext();

export const ExploreProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <ExploreContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ExploreContext.Provider>
  );
};

ExploreProvider.propTypes = {
  children: node.isRequired,
};

export default ExploreContext;
