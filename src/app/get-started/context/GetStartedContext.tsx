"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GetStartedContextProps {
  step: number;
  setStep: (step: number) => void;
}

const GetStartedContext = createContext<GetStartedContextProps | undefined>(undefined);

export const GetStartedProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);

  return (
    <GetStartedContext.Provider value={{ step, setStep }}>
      {children}
    </GetStartedContext.Provider>
  );
};

export const useGetStartedContext = () => {
  const context = useContext(GetStartedContext);
  if (!context) {
    throw new Error('useGetStartedContext must be used within a GetStartedProvider');
  }
  return context;
};
