// PetContext.js
import React, { createContext, useState } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [petName, setPetName] = useState('');

  return (
    <PetContext.Provider value={{ petName, setPetName }}>
      {children}
    </PetContext.Provider>
  );
};
