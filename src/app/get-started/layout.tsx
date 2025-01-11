"use client";
import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { GetStartedProvider, useGetStartedContext } from './context/GetStartedContext';
import Link from 'next/link';

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return (
    <GetStartedProvider>

      <section className='py-2 px-4  space-y-3'>
        <Link href="/" className='flex items-center gap-3  cursor-pointer'>
          <IoMdArrowBack className='text-xl text-insta-black' />
          <p className='text-base text-insta-black font-semibold'>Get started</p>
        </Link>
        <div className='py-3'>
          <Stepper />
        </div>
        {children}
      </section>
    </GetStartedProvider>
  )
}



const Stepper = () => {
  const { step } = useGetStartedContext();
  return (
    <div className='flex gap-2 items-center w-full'>
      {[1, 2, 3].map((currentStep) => (
        <span
          key={currentStep}
          className={`h-1.5 w-4/12 px-4 rounded-full cursor-pointer ${currentStep <= step ? 'bg-insta-primary' : 'bg-gray-300'
            }`}
        />
      ))}
    </div>
  )
}