import React, { createContext, useState, useContext } from 'react';

const TotalAmountContext = createContext<{ totalAmount: number, setTotalAmount: React.Dispatch<React.SetStateAction<number>> } | undefined>(undefined);

export const TotalAmountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  return (
    <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}
    </TotalAmountContext.Provider>
  );
};

export const useTotalAmount = () => {
  const context = useContext(TotalAmountContext);
  if (!context) {
    throw new Error('useTotalAmount must be used within a TotalAmountProvider');
  }
  return context;
};
