
"use client";
import { useGetStartedContext } from '@/app/get-started/context/GetStartedContext';
import { useState } from 'react';
import { RiCameraAiLine } from 'react-icons/ri';

export default function StoreForm() {
  const { formData, setFormData, validateStep, errors } = useGetStartedContext();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string); // Show the preview
        setFormData({ storeImage: file }); // Save the file in the formData
      };
      reader.readAsDataURL(file);
    }
  };



  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validateStep(3);
    if (isValid) {
      // Logic to finalize the form or navigate to the next page
      console.log(formData, "Form completed successfully!");
    }
  };

  return (
    <form className="min-h-screen relative" onSubmit={handleNext}>
      <div className="py-4 space-y-6">
        <div className="p-4 border border-slate-200 rounded-xl flex justify-center items-center">
          <div>
            <div className="h-40 w-40 rounded-full bg-gray-200 flex justify-center items-center relative">
              {previewImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewImage}
                  alt="Uploaded Preview"
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <RiCameraAiLine className="text-2xl text-red-400 cursor-pointer" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

            </div>
            {!previewImage ? (
              <p className='text-center space-y-3 text-insta-grey'>Upload store logo</p>
            ) : null}
            {errors.storeImage && (
              <p className="text-red-500 text-sm mt-2">{errors.storeImage}</p>
            )}
          </div>
        </div>

        <input
          type="text"
          placeholder="Store name"
          onChange={(e) => setFormData({ storeName: e.target.value })}
          className={`rounded-xl border ${errors.storeName ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName}</p>}

        <input
          type="text"
          placeholder="Store tag"
          onChange={(e) => setFormData({ storeTag: e.target.value })}
          className={`rounded-xl border ${errors.storeTag ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.storeTag && <p className="text-red-500 text-sm">{errors.storeTag}</p>}

        <input
          type="text"
          placeholder="Store phone number"
          onChange={(e) => setFormData({ storePhone: e.target.value })}
          className={`rounded-xl border ${errors.storePhone ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.storePhone && <p className="text-red-500 text-sm">{errors.storePhone}</p>}

        <input
          type="email"
          placeholder="Store email"
          onChange={(e) => setFormData({ storeEmail: e.target.value })}
          className={`rounded-xl border ${errors.storeEmail ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.storeEmail && <p className="text-red-500 text-sm">{errors.storeEmail}</p>}

        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setFormData({ category: e.target.value })}
          className={`rounded-xl border ${errors.category ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
      </div>

      <div className="space-y-4  w-full">
        <hr />
        <button
          type="submit"
          className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

