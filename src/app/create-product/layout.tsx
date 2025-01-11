"use client";
import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function CreatePrdoductLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=''>
      <div className='flex justify-between items-center fixed py-4 w-full bg-white'>
        <div className='flex items-center gap-3 '>
          <Link href="/get-started" className='cursor-pointer'>
            <IoMdArrowBack className='text-xl text-insta-black' />
          </Link>
          <p className='text-base text-insta-black font-semibold'>Create a product</p>
        </div>
        <HiOutlineDotsVertical className='text-xl text-insta-grey' />
      </div>
      <div className='py-12 px-4  space-y-3'>
        {children}
      </div>
    </section>
  )
}
