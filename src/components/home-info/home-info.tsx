/* eslint-disable */
import React from "react";

const DATA = [
  {
    title: "FAST",
    subtitle: "X2",
  },
  {
    title: "QUALITY",
    subtitle: "A++",
  },
  {
    title: "LOW PRICE",
    subtitle: "1/2",
  },
  {
    title: "HIGH TECH",
    subtitle: "Gen AI",
  },
];

const HomeInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[24px] text-gradient mt-[50px] desktop:mt-[100px]">영상 제작소</div>
      <div className="desktop:text-[44px] text-[24px] mt-[20px] mb-[30px] text-center">
        당장 내일 <br className="desktop:hidden" />{" "}
        <span className="font-bold">‘고품질 맞춤 영상’</span> 을 받아보세요.
      </div>
      <div className="flex flex-row w-full justify-center">
        {DATA.map((d, i: number) => (
          <div
            key={i}
            className="relative w-[84px] h-[84px]  desktop:w-[211px] desktop:h-[211px] p-[1px] bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] rounded-full"
          >
            <div className="w-full h-full bg-black rounded-full relative flex flex-col items-center justify-center px-[20px]">
              {Number(i) === 0 && Number(i) === 3 ? (
                <div className="absolute top-[50%] right-[-2px] w-[2px] h-[2px] bg-black flex flex-col"></div>
              ) : (
                <div className="absolute top-[50%] left-[-2px] w-[2px] h-[2px] bg-black flex flex-col"></div>
              )}
              <div className="text-[16px] desktop:text-[32px] text-center text-gradient">
                {d?.title}
              </div>
              <div className="text-[24px] text-gradient opacity-60 mobile:hidden">
                {d?.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[16px] desktop:text-[32px] font-bold mt-[50px] text-center">
        AI VIDEO ON YOUR DEMAND
      </div>
      <div className="text-center mobile:hidden desktop:flex flex-col opacity-60 text-[20px]">
        <div className="mt-[20px]">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에 <br />
          영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다. <br />
        </div>
        <div className="mt-[30px]">
          가격은 절반으로, 속도는 두배로, 품질은 A++! <br />
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 <br />등 당신이 필요한 '그 영상'을
          플루닛 영상제작소에 맡겨주세요.
        </div>
      </div>
      <div className="text-center mobile:flex desktop:hidden text-[16px] flex-col px-[20px] opacity-60">
        <div className="mt-[20px] tracking-tighter">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 <br /> 국내 최고의 생성 AI 기술에 영상
          전문가의 터치를 더해 <br />
          비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
        </div>
        <div className="mt-[30px] tracking-tighter">
          가격은 절반으로, 속도는 두배로, 품질은 A++! <br />
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등 <br />
          당신이 필요한 '그 영상'을 <br />
          플루닛 영상제작소에 맡겨주세요.
        </div>
      </div>
      <div className="w-[240px] my-[38px] desktop:my-[96px] h-[1px] bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_100%,#FFFFFF_0%)] desktop:w-[800px] opacity-40"></div>
    </div>
  );
};

export default HomeInfo;
