import React from 'react'
import { RiCameraAiLine } from "react-icons/ri";

export default function StoreForm() {
  return (
    <form className='min-h-screen relative'>
      <div className='py-4 space-y-6'>
        <div className='p-4 border  border-slate-200 rounded-xl flex justify-center items-center'>
          <div className='h-40 w-40 rounded-full bg-gray-200 flex justify-center items-center'>
            <RiCameraAiLine className='text-2xl text-red-400 cursor-pointer' />
          </div>
        </div>
        <input type="text" placeholder='Store name' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="text" placeholder='Store tag' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="text" placeholder='Store phone number' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="email" placeholder='Store email' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />

        <input type="text" placeholder='Category' className='rounded-xl border border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary' />


        <div className='space-y-4 absolute bottom-0 w-full'>
          <hr />
          <button className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium">Continue</button>

        </div>

      </div>
    </form>
  )
}
