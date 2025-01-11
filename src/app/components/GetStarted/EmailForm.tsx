
"use client";
import { useGetStartedContext } from '@/app/get-started/context/GetStartedContext';

export default function EmailForm() {
  const { setStep, setFormData, validateStep, errors } = useGetStartedContext();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validateStep(1);
    if (isValid) setStep(2);
  };

  return (
    <form className="min-h-screen relative" onSubmit={handleNext}>
      <div>
        <div className="space-y-2">
          <h3 className="text-xl text-insta-black font-medium">Enter your phone number or email to get started</h3>
          <p className="text-base text-insta-grey">We will send you a verification code for confirmation</p>
        </div>
        <div className="py-6">
          <input
            type="text"
            placeholder="Enter phone number or email"
            onChange={(e) => setFormData({ contact: e.target.value })}
            className={`rounded-xl border ${errors.contact ? 'border-red-500' : 'border-slate-200'
              } px-2 py-4 w-full text-insta-grey text-sm focus:ring-insta-primary focus:border-insta-primary`}
          />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
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
      </div>
    </form>
  );
}

