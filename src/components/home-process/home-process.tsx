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
    iconMobile: <IcNote width={24} height={31} />,
    title: "제작 안내",
    subtitle1: "영상 제작 문의를 통해 의뢰 확인 후",
    subtitle2: "견적 및 진행 순서 안내",
  },
  {
    icon: null,
    title: "영상 생성",
    subtitle1: "스크립트 수신 즉시 가상인간 영상 생성",
    subtitle2: "그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    icon: <IcVideo />,
    iconMobile: null,
    title: "편집 및 납품",
    subtitle1: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
    subtitle2: "",
  },
];
const HomeProcess = () => {
  return (
    <div className="mobile:px-[20px]">
      <div className="flex justify-center text-center text-[20px] desktop:text-[48px] font-bold relative">
        <div className="relative mb-[50px] desktop:text-[48px] text-[20px] mt-[100px] desktop:mt-[238px]">
          <div className="absolute bg-linear-primary rounded-full w-[8px] h-[8px] top-0 left-[-9px] desktop:left-[-17px] "></div>
          MAKING PROCESS
        </div>
      </div>
      <div className="flex medium:flex-col medium:justify-center medium:items-center justify-center">
        <div className="desktop:bg-[#141414] rounded-[20px] desktop:w-[780px] w-full max-w-[780px] h-[816px] flex flex-col items-center desktop:border desktop:px-[93px] desktop:py-[64px]">
          <div className="desktop:text-[44px] text-[22x] font-bold desktop:h-[71px]">일반 제작</div>
          <div className="desktop:text-[24px] opacity-60 h-[51px]">제작 시작 후 5영업일 이내</div>
          {STEPSLEFT.map((s, i) => (
            <div
              key={i}
              className="mobile:pl-[27px] mobile:pr-[8px] mobile:py-[24px] w-full border mt-[20px] rounded-[15px] mobile:bg-[#141414] desktop:rounded-full w-full flex flex-row desktop:pl-[80px] desktop:pr-[53px] desktop:py-[23px] desktop:h-[93px]"
            >
              <div className="flex flex-col flex-shrink desktop:w-[150px] mobile:mr-[16px]">
                <div className="text-gradient-2 mobile:text-[12px]"> STEP{i + 1}</div>
                <div className="desktop:text-[20px] font-bold mobile:text-[18px]"> {s?.title} </div>
              </div>
              <div className="desktop:hidden flex flex-col flex-1 opacity-60 text-[14px] tracking-tighter">
                <div className="tracking-tighter">
                  {" "}
                  {s.text1} {s.text2}{" "}
                </div>
              </div>
              <div className="mobile:hidden flex flex-col flex-1 opacity-60  tracking-tighter">
                <div className="tracking-tighter"> {s.text1} </div>
                <div className="tracking-tighter"> {s.text2} </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden medium:h-[50px] lg:block w-[50px]"></div>{" "}
        <div className="desktop:hidden flex flex-col text-center">
          <div className="text-[28px] font-bold text-gradient">Ploonet Quickserve™</div>
          <div className="mb-[20px]">제작 시작 후 12~48시간 이내</div>
        </div>
        <div className="mobile:px-[1px] mobile:py-[1px] bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] rounded-[20px] desktop:w-[780px] w-full max-w-[780px] flex flex-col items-center ">
          <div className="flex flex-col  rounded-[20px] bg-[#141414] desktop:w-[778px] desktop:h-[814px] desktop:mt-[1px] desktop:px-[93px] desktop:py-[64px]">
            <div className="mobile:hidden flex flex-col">
              <div className="text-[44px] font-bold text-gradient">Ploonet Quickserve™</div>
              <div className="mb-[20px] text-[24px]">제작 시작 후 12~48시간 이내</div>
            </div>
            {STEPSRIGHT.map((s, i) => (
              <>
                <div
                  key={i}
                  className="w-full flex flex-row flex-1 justify-center items-center mobile:px-[27px] mobile:py-[46px]"
                >
                  <div className="bg-linear-primary flex flex-col flex-none desktop:flex-shrink w-[84px] h-[84px] desktop:w-[134px] desktop:h-[134px] items-center rounded-[18px] overflow-hidden">
                    <div className="desktop:mt-[20px] mt-[12px] text-center text-ellipsis whitespace-nowrap w-full overflow-hidden mobile:text-[12px]">
                      STEP {i + 1}
                    </div>
                    <div className="mt-[13px] mobile:hidden"> {s.icon} </div>
                    <div className="mt-[13px] desktop:hidden mt-2"> {s.iconMobile} </div>
                  </div>
                  <div className="flex flex-col mobile:hidden w-[404px] desktop:ml-[40px] justify-center">
                    <div className="text-[24px] font-bold">{s.title}</div>
                    <div className="text-[18px] opacity-60">{s.subtitle1}</div>
                    <div className="text-[18px] opacity-60">{s.subtitle2}</div>
                  </div>
                  <div className="flex flex-col desktop:hidden justify-center ml-[20px]">
                    <div className="text-[18px] font-bold">{s.title}</div>
                    <div className="text-[14px] opacity-60">
                      {s.subtitle1} {s.subtitle2}
                    </div>
                  </div>
                </div>
                {i !== STEPSRIGHT.length - 1 && (
                  <div className="flex w-full justify-end mobile:px-[27px]">
                    <div className="w-full h-[1px] bg-white opacity-10 w-[189px] desktop:w-[428px]"></div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-[50px]">
        <div className="w-[760px] text-center text-[14px] text-[#999999]">
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등 전문 작업이 필요할
          경우 작업 기간은 조정될 수 있습니다. ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른
          작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default HomeProcess;
