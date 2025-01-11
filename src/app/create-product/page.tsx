import Link from 'next/link'
import React from 'react'
import { IoCheckmark } from 'react-icons/io5'
import { LuImagePlus } from 'react-icons/lu'
import { RiArrowDownSLine } from 'react-icons/ri'

export default function CreateProduct() {
  return (
    <div className='py-4'>
      <div className='flex justify-between items-center'>
        <div className='py-1 px-8  flex  items-center gap-4 text-insta-grey text-sm border border-slate-200 rounded-full'>Draft <IoCheckmark className='text-sm text-insta-grey' />
        </div>
        <Link href="/preview" className='text-base text-insta-primary font-medium cursor-pointer'>Preview product</Link>
      </div>

      <div className='py-4'>
        <hr />

        <form >
          <div className='space-y-2 py-4'>
            <div className='flex justify-between items-center'>
              <p className='text-insta-black text-base font-medium'>Basic Details</p>
              <RiArrowDownSLine className='text-xl text-insta-grey' />
            </div>
            <div className='space-y-3 py-2'>
              <input
                type="text"
                placeholder="Product Title"
                className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
              />
              <textarea placeholder='Product description' className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
              >

              </textarea>
              <div className='flex gap-3 items-center'>
                <input
                  type="text"
                  placeholder="Price"
                  className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
                />
                <input
                  type="text"
                  placeholder="Old price"
                  className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
                />
              </div>
              <textarea placeholder='Product collection' className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
              >

              </textarea>

              <input
                type="text"
                placeholder="Inventory stocks"
                className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
              />

            </div>
          </div>
          <hr />
          <div className='py-4'>
            <div className='flex justify-between items-center'>
              <p className='text-insta-black text-base font-medium'>Product images</p>
              <RiArrowDownSLine className='text-xl text-insta-grey' />
            </div>

            <div className='py-2'>
              <div className='bg-slate-200 p-3 cursor-pointer rounded-full text-insta-primary text-base font-medium flex justify-center items-center gap-2'>
                Add Image <LuImagePlus />
              </div>
            </div>
          </div>
          <hr />
          <div className='py-4 space-y-3'>
            <div >
              <p className='text-insta-black text-base font-medium'>Inventory variations</p>
            </div>

            <div>
              <div className="flex  gap-4 items-center mb-4">
                <input id="variable" type="checkbox" value="" className="w-4 h-4 text-insta-primary bg-insta-primary border-gray-300 rounded focus:ring-insta-primary dark:focus:ring-insta-primary  focus:ring-2" />
                <label htmlFor='variable' className='text-sm text-insta-grey'>This product has variable; has different colors, sizes, weight, materials, etc.</label>
              </div>
            </div>
          </div>

          <hr />

          <div className='py-4'>
            <div className='flex justify-between items-center'>
              <p className='text-insta-black text-base font-medium'>Shipping </p>
              <RiArrowDownSLine className='text-xl text-insta-grey' />
            </div>

            <div className='py-2 space-y-3'>

              <div className="flex  gap-4 justify-between items-center mb-4">
                <label htmlFor='self' className='text-sm text-insta-grey'>Self shipping</label>
                <input id="self" type="checkbox" value="" className="w-4 h-4 text-insta-primary bg-insta-primary border-gray-300 rounded focus:ring-insta-primary dark:focus:ring-insta-primary  focus:ring-2" />
              </div>
              <div className="flex  gap-4 justify-between items-center mb-4">
                <label htmlFor='instant' className='text-sm text-insta-grey'>InstaShop shipping</label>
                <input id="instant" type="checkbox" value="" className="w-4 h-4 text-insta-primary bg-insta-primary border-gray-300 rounded focus:ring-insta-primary dark:focus:ring-insta-primary  focus:ring-2" />
              </div>

              <input
                type="text"
                placeholder="Inventory stocks"
                className="rounded-xl border 'border-slate-200 px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary "
              />
            </div>
          </div>

          <div className="space-y-4  w-full">
            <hr />
            <div className='py-2 flex  gap-4 justify-between items-center'>
              <button
                type="submit"
                className="border border-insta-primary bg-white text-insta-primary w-full py-2 rounded-full shadow-md font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium"
              >
                Save
              </button>
            </div>

          </div>


        </form>
      </div>
    </div>
  )
}
