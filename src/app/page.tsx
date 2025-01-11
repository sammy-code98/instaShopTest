import Image from "next/image"
import Link from "next/link";
import { splashScreenData } from "@/utils/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center space-y-5">
      <Image src="/shopping.svg"
        width={500}
        height={500}
        alt={"shopping"} />

      <h1 className="text-3xl text-insta-black font-semibold">Welcome</h1>
      <p className="text-center text-insta-grey text-sm">The safest platfrom to shop from social media vendors</p>

      <div className="p-4 border border-insta-primary bg-insta-secondary rounded-xl shadow-md w-full">
        {splashScreenData.map((splash) => (
          <div className="flex  items-center gap-2 space-y-3" key={splash.id}>
            <Image src="/check_circle.svg" alt="check-circle" width={15} height={15} className="mt-4" />
            <p className="text-insta-black text-sm">{splash.text}</p>
          </div>
        ))}
      </div>

      <div className="py-6 w-full">
        <Link href={"/get-started"} >
        <button className="bg-insta-primary text-white w-full py-2 rounded-full shadow-md font-medium">Get started</button>
        </Link>
      </div>
    </div>
  );
}
