"use client";
import React from 'react';
import { useGetStartedContext } from './context/GetStartedContext';
import EmailForm from '../components/GetStarted/EmailForm';
import ProfileSetup from '../components/GetStarted/ProfileSetup';
import StoreForm from '../components/GetStarted/StoreForm';


export default function GetStarted() {
  const { step } = useGetStartedContext();

  return (
    <div className='min-h-screen relative'>
      {step === 1 && <EmailForm />}
      {step === 2 && <ProfileSetup />}
      {step === 3 && <StoreForm />}
    </div>
  );
}
