import Image from 'next/image'
import React from 'react'

export default function ProfileSetup() {
  return (
    <form className='min-h-screen relative'>
      <div className='space-y-4'>
        <h3 className='text-xl text-insta-black font-medium'>Complete profile setup</h3>
        <p className='text-base text-insta-grey'>Connect your socials for quick setup</p>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-200 w-full rounded-md p-4 flex justify-center items-center'>
            <Image src="/instagram.svg" alt="instagram" width={15} height={15} />
          </div>
          <div className='bg-gray-200  w-full rounded-md p-4 flex justify-center items-center'>
            <Image src="/tiktok.svg" alt="tiktok" width={15} height={15} />
          </div>
          <div className='bg-gray-200 w-full rounded-md p-4 flex justify-center items-center'>
            <Image src="/google.svg" alt="google" width={15} height={15} />
          </div>
        </div>
        <p className='text-sm text-insta-grey'>Or enter manually</p>
      </div>

      <div className='space-y-6 py-4'>
        <input type="text" placeholder='Full name' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="text" placeholder='Username' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="text" placeholder='Phone number' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="email" placeholder='Email' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />


      </div>
      <div className='space-y-4 absolute bottom-0 w-full'>
        <hr />
        <button className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium">Continue</button>

      </div>
    </form>
  )
}
