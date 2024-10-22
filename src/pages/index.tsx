import Image from "next/image";
import localFont from "next/font/local";
import ImageDesktop from "@/img/home_bg_desktop.png";
import ImageMobile from "@/img/home_bg_mobile.png";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <div className="w-full max-w-[375px] mx-auto aspect-w-25 aspect-h-24 desktop:hidden block">
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
    </div>
  );
}
