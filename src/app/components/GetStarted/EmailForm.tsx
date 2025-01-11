import React from 'react'

export default function EmailForm() {
  return (
    <form className='min-h-screen relative'>
      <div>
        <div className='space-y-2'>
          <h3 className='text-xl text-insta-black font-medium'>Enter your phone number or email to get started</h3>
          <p className='text-base text-insta-grey'>We will send you a verification code for confirmation</p>
        </div>

        <div className='py-6'>
          <input type="text" placeholder='Enter phone number or email' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />
        </div>
        <div className='space-y-4 absolute bottom-0 w-full'>
          <hr />
          <button className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium">Continue</button>

        </div>
      </div>
    </form>
  )
}
