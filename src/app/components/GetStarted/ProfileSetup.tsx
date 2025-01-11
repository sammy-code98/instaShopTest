
"use client";
import Image from 'next/image';
import { useGetStartedContext } from '@/app/get-started/context/GetStartedContext';

export default function ProfileSetup() {
  const { setStep, setFormData, validateStep, errors } = useGetStartedContext();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validateStep(2);
    if (isValid) setStep(3);
  };

  return (
    <form className="min-h-screen relative" onSubmit={handleNext}>
      <div className="space-y-4">
        <h3 className="text-xl text-insta-black font-medium">Complete profile setup</h3>
        <p className="text-base text-insta-grey">Connect your socials for quick setup</p>
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 w-full rounded-md p-4 flex justify-center items-center">
            <Image src="/instagram.svg" alt="instagram" width={15} height={15} />
          </div>
          <div className="bg-gray-200  w-full rounded-md p-4 flex justify-center items-center">
            <Image src="/tiktok.svg" alt="tiktok" width={15} height={15} />
          </div>
          <div className="bg-gray-200 w-full rounded-md p-4 flex justify-center items-center">
            <Image src="/google.svg" alt="google" width={15} height={15} />
          </div>
        </div>
        <p className="text-sm text-insta-grey">Or enter manually</p>
      </div>

      <div className="space-y-6 py-4">
        <input
          type="text"
          placeholder="Full name"
          onChange={(e) => setFormData({ fullName: e.target.value })}
          className={`rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setFormData({ username: e.target.value })}
          className={`rounded-xl border ${errors.username ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

        <input
          type="text"
          placeholder="Phone number"
          onChange={(e) => setFormData({ phone: e.target.value })}
          className={`rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ email: e.target.value })}
          className={`rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'
            } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="space-y-4 absolute bottom-0 w-full">
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
