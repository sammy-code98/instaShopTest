// "use client";
// import React from 'react'

// export default function GetStarted() {
//   return (
//     <div className='min-h-screen relative'>
//       <div>
//         <div className='space-y-2'>
//           <h3 className='text-xl text-insta-black font-medium'>Enter your phone number or email to get started</h3>
//           <p className='text-base text-insta-grey'>We will send you a verification code for confirmation</p>
//         </div>

//         <div className='py-6'>
//           <input type="text" placeholder='Enter phone number of email' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />
//         </div>
//         <div className='space-y-4 absolute bottom-0 w-full'>
//           <hr />
//           <button className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium">Continue</button>

//         </div>
//       </div>
//     </div>
//   )
// }


"use client";
import React from 'react';
import { useGetStartedContext } from './context/GetStartedContext';
import EmailForm from '../components/GetStarted/EmailForm';
import ProfileSetup from '../components/GetStarted/ProfileSetup';
import StoreForm from '../components/GetStarted/StoreForm';
// import { useGetStartedContext } from './GetStartedContext';


export default function GetStarted() {
  const { step, setStep } = useGetStartedContext();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className='min-h-screen relative'>
      {step === 1 && <EmailForm />
        // (
        //   <div>
        //     <div className='space-y-2'>
        //       <h3 className='text-xl text-insta-black font-medium'>
        //         Enter your phone number or email to get started
        //       </h3>
        //       <p className='text-base text-insta-grey'>
        //         We will send you a verification code for confirmation
        //       </p>
        //     </div>
        //     <div className='py-6'>
        //       <input
        //         type="text"
        //         placeholder='Enter phone number or email'
        //         className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary'
        //       />
        //     </div>
        //   </div>
        // )

      }

      {step === 2 && <ProfileSetup />
        // (
        //   <div>
        //     <h3 className='text-xl text-insta-black font-medium'>Verify your account</h3>
        //     <p className='text-base text-insta-grey'>
        //       Enter the verification code sent to your email or phone number
        //     </p>
        //     <div className='py-6'>
        //       <input
        //         type="text"
        //         placeholder='Enter verification code'
        //         className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary'
        //       />
        //     </div>
        //   </div>

        // )
      }

      {step === 3 && <StoreForm />
        // (
        //   <div>
        //     <h3 className='text-xl text-insta-black font-medium'>Complete your profile</h3>
        //     <p className='text-base text-insta-grey'>
        //       Provide your name and other details to complete your account setup
        //     </p>
        //     <div className='py-6'>
        //       <input
        //         type="text"
        //         placeholder='Enter your name'
        //         className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary'
        //       />
        //     </div>
        //   </div>
        // )
      }

      <div className='space-y-4 absolute bottom-0 w-full'>
        <hr />
        <div className="flex justify-between">
          <button
            className="bg-gray-200 text-insta-black py-2 px-4 rounded-full shadow-md font-medium"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="bg-insta-primary text-white py-2 px-4 rounded-full shadow-md font-medium"
            onClick={handleNext}
            disabled={step === 3}
          >
            {step === 3 ? 'Finish' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
