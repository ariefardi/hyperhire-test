import React from "react";
import Image from "next/image";
import Image1 from "@/img/image_1.png";
import Image2 from "@/img/image_2.png";
import Image3 from "@/img/image_3.png";
import Image4 from "@/img/image_4.png";
import Image5 from "@/img/image_5.png";
import Image6 from "@/img/image_6.png";
import Image7 from "@/img/image_7.png";
import Image8 from "@/img/image_8.png";
import Image9 from "@/img/image_9.png";
import Image10 from "@/img/image_10.png";
import Image11 from "@/img/image_11.png";
import Image12 from "@/img/image_12.png";

const IMAGES = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];
const HomePrevwork = () => {
  return (
    <div>
      <div className="flex justify-center text-center text-[20px] desktop:text-[48px] font-bold relative">
        <div className="relative mb-[50px] mt-[100px]">
          <div className="absolute bg-linear-primary rounded-full w-[8px] h-[8px] top-0 left-[-9px] desktop:left-[-17px] "></div>
          PREVIOUS WORKS
        </div>
      </div>
      <div className="grid gap-0 mobile:grid-cols-2 desktop:grid-cols-4">
        {IMAGES.map((im, i) => (
          <div key={i} className="aspect-w-16 aspect-h-9 border">
            <Image src={im} alt="Image 1" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePrevwork;
