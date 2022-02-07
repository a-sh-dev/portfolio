import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const openNavMenu = () => {
    setIsNavOpen(true);
  };

  const closeNavMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <AppContext.Provider value={{ isNavOpen, openNavMenu, closeNavMenu }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook to access the AppContext
export const useAppContext = () => {
  return React.useContext(AppContext);
};
