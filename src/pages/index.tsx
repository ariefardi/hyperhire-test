import ImageDesktop from "@/img/home_bg_desktop.png";
import ImageMobile from "@/img/home_bg_mobile.png";
import ImageWidget from "@/img/widget.png";
import Image from "next/image";

import HomeContact from "@/components/home-contact";
import HomeInfo from "@/components/home-info";
import HomePrevwork from "@/components/home-prevwork";
import HomeProcess from "@/components/home-process";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative mobile:hidden">
        <div className="w-[125px] h-[125px] absolute right-[20px] z-[50] top-[30vh]">
          <Image src={ImageWidget} fill alt="widget" />
        </div>
      </div>

      <div className="w-full max-w-screen mx-auto aspect-[375/361] block desktop:hidden relative">
        <Image
          src={ImageMobile} // Replace with your image path
          alt="Responsive Image"
          layout="responsive" // Ensure the image maintains the aspect ratio
          width={375} // Width for the image
          height={361} // Height for the image
          objectFit="cover" // Ensure the image covers the entire container without distortion
        />
      </div>
      <div className="text-xl desktop:block mobile:hidden h-screen w-full">
        <Image alt="desktop-image" objectFit="cover" src={ImageDesktop} fill />{" "}
      </div>

      <HomeInfo />
      <HomePrevwork />
      <HomeProcess />
      <HomeContact />
    </div>
  );
}
