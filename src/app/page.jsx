import Image from "next/image";
import { TbGridDots } from "react-icons/tb";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          width={200}
          height={200}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          alt="Google Logo"
        />
        <HomeSearch />
      </div>
    </>
  );
}
