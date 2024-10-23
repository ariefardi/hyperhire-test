import React, { useCallback, useState } from "react";
import Image from "next/image";
import Logo from "@/img/logo.png";
import IcGlobe from "@/SV/ic_globe";
import IcBurger from "@/SV/ic_burger";
const Menus = ["스튜디오", "워크센터", "손비서", "메타휴먼", "영상제작소", "공지사항", "제휴문의"];
const Navbar = () => {
  const [hover, setHover] = useState<number | null>(null);
  const onHover = useCallback((value: number | null) => {
    setHover(value);
  }, []);
  return (
    <div
      className="flex desktop:justify-center"
      style={{ position: "sticky", top: 0, zIndex: 10000 }}
    >
      <div className="desktop:hidden bg-black pb-[16px] pt-[60px] flex flex-row w-full px-[20px]">
        <div className="flex-grow">
          <Image src={Logo} width={121} height={20} alt="logo" />
        </div>
        <div>
          <IcBurger />
        </div>
      </div>
      <div className="w-full bg-black mobile:hidden">
        <div className="py-[36px] bg-black container flex flex-row">
          <div>
            <Image src={Logo} width={170} height={28} alt="logo" />
          </div>
          <div className="flex-1 flex flex-row mx-[100px]">
            {Menus.map((menu, i) => (
              <div
                className={`flex-1 relative text-center relative font-bold ${
                  hover == i ? "" : "opacity-60"
                }`}
                key={menu}
                onMouseEnter={() => onHover(i)}
                onMouseLeave={() => onHover(null)}
              >
                {" "}
                {menu}
                {hover == i && (
                  <div className="bg-red-400 w-[8px] h-[8px] absolute top-[30px] left-[48%] rounded-full"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            <div className="font-bold mr-[55px]">로그인</div>
            <div className="cursor-pointer">
              {" "}
              <IcGlobe />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
