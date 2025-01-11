
"use client";

import React, { createContext, useContext, useState } from "react";
import { ZodError } from "zod";
import { emailFormSchema, profileSetupSchema, storeFormSchema } from "@/schema/auth.schema";

type FormData = {
  contact?: string;
  fullName?: string;
  username?: string;
  phone?: string;
  email?: string;
  storeName?: string;
  storeTag?: string;
  storePhone?: string;
  storeEmail?: string;
  category?: string;
  storeImage?: File;
};

const initialFormData: FormData = {
  storeImage: undefined,
};

// Context type
type GetStartedContextType = {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  validateStep: (step: number) => Promise<boolean>;
  errors: Record<string, string>;
};

// Context initialization
const GetStartedContext = createContext<GetStartedContextType>({
  step: 1,
  setStep: () => { },
  formData: initialFormData,
  setFormData: () => { },
  validateStep: async () => false,
  errors: {},
});

export const GetStartedProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormDataState] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const validateStep = async (step: number): Promise<boolean> => {
    setErrors({});
    try {
      // Validation logic for each step
      if (step === 1) emailFormSchema.parse(formData);
      if (step === 2) profileSetupSchema.parse(formData);
      if (step === 3) storeFormSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        // Extract and set validation errors
        const validationErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as Record<string, string>);
        setErrors(validationErrors);
      }
      return false;
    }
  };

  return (
    <GetStartedContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
        validateStep,
        errors,
      }}
    >
      {children}
    </GetStartedContext.Provider>
  );
};

// Hook for consuming the context
export const useGetStartedContext = () => {
  const context = useContext(GetStartedContext);
  if (!context) {
    throw new Error("useGetStartedContext must be used within a GetStartedProvider");
  }
  return context;
};