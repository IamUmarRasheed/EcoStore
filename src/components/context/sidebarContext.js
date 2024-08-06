import React, { createContext, useContext, useState } from "react";

// Create context
const SidebarContext = createContext();

// Provider component
const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    console.log('helel')
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, handleSidebar ,closeSidebar}}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for using sidebar context
const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarProvider, useSidebarContext };
