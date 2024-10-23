import IcNote from "@/SV/ic_note";
import IcVideo from "@/SV/ic_video";
import React from "react";

const STEPSLEFT = [
  {
    title: "사전 논의",
    text1: "영상 제작 문의를 통해 의뢰 확인 후",
    text2: "상담을 통해 방향 설정 및 내용 협의",
  },
  {
    title: "영상 기획",
    text1: "스토리보드 전달&수정을 통한 기획안 확정",
    text2: "가상인간 발화용 스크립트 작성과 프롬프팅",
  },
  {
    title: "영상 생성 ",
    text1: "작성한 스크립트로 가상인간 영상 생성",
    text2: "그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    title: "영상 편집",
    text1: "영상 전문가의 편집, 디자인, 후반 작업 단계",
    text2: "필요시 실사 촬영 병행하여 편집본 완성",
  },
  {
    title: "사전 논의",
    text1: "고객 피드백 반영하여 최종본 완성 및 납품",
    text2: "* 영상 수정 무료 1회 제공",
  },
];

const STEPSRIGHT = [
  {
    icon: <IcNote />,
    title: "제작 안내",
    subtitle: "영상 제작 문의를 통해 의뢰 확인 후\n견적 및 진행 순서 안내",
  },
  {
    icon: null,
    title: "영상 생성",
    subtitle: "스크립트 수신 즉시 가상인간 영상 생성\n그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    icon: <IcVideo />,
    title: "편집 및 납품",
    subtitle: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
  },
];
const HomeProcess = () => {
  return (
    <div>
      <div className="flex justify-center text-center text-[20px] desktop:text-[48px] font-bold relative">
        <div className="relative mb-[50px] mt-[100px]">
          <div className="absolute bg-linear-primary rounded-full w-[8px] h-[8px] top-0 left-[-9px] desktop:left-[-17px] "></div>
          MAKING PROCESS
        </div>
      </div>
      <div className="flex medium:flex-col items-stretch justify-center">
        <div className=" bg-[#141414] rounded-[20px] desktop:w-[780px] w-full max-w-[780px] flex flex-col items-center border px-[93px] py-[64px]">
          <div className="text-[44px] font-bold h-[71px]">일반 제작</div>
          <div className="text-[24px] opacity-60 h-[51px]">제작 시작 후 5영업일 이내</div>
          {STEPSLEFT.map((s, i) => (
            <div
              key={i}
              className="border mt-[20px] rounded-full w-full flex flex-row pl-[80px] pr-[53px] py-[23px]"
            >
              <div className="flex flex-col flex-shrink w-[150px]">
                <div className="text-gradient-2"> STEP{i + 1}</div>
                <div className="text-[20px] font-bold"> {s?.title} </div>
              </div>
              <div className="flex flex-col flex-1 opacity-60">
                <div> {s.text1} </div>
                <div> {s.text2} </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden  lg:block w-[50px]"></div> {/* Gap only visible on large screens */}
        <div className="bg-[#141414] rounded-[20px] desktop:w-[780px] w-full max-w-[780px] flex flex-col items-center border px-[93px] py-[64px]">
          <div className="text-[44px] font-bold text-gradient">Ploonet Quickserve™</div>
          <div className="mb-[20px] text-[24px]">제작 시작 후 12~48시간 이내</div>
          {STEPSRIGHT.map((s, i) => (
            <div key={i} className="w-full flex flex-row mt-[22px]">
              <div className="bg-linear-primary flex flex-col flex-shrink w-[134px] h-[134px] items-center rounded-[18px]">
                <div className="mt-[20px]"> STEP{i + 1}</div>
                <div className="mt-[13px]"> {s.icon} </div>
              </div>
              <div className="flex flex-col w-[404px]">
                <div> {s.title} </div>
                <div> {s.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProcess;
