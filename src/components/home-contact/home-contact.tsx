import React from "react";
import IcCheck from "@/SV/ic_check";
import IcArrow from "@/SV/ic_arrow";
const HomeContact = () => {
  return (
    <div className="flex justify-center mt-[100px] desktop:mt-[300px]">
      <div className="flex flex-col items-center mobile:px-[20px] w-[901px] small:w-full mobile:text-center">
        <div className="mobile:text-[18px] text-[24px] text-gradient font-bold">영상 제작 문의</div>
        <div className="mobile:text-[24px] text-[44px] font-bold mt-[15px]">
          영상 제작이 필요하다면,{" "}
          <span className="font-light mobile:hidden">지금 문의 주세요.</span>
          <span className="font-light desktop:hidden">
            {" "}
            <br /> 지금 문의 주세요.
          </span>
        </div>

        <div className="flex flex-col mobile:hidden">
          <div className="mobile:text-[18px] text-[24px] opacity-60 mt-[38px]">
            여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가
          </div>
          <div className="text-[24px] opacity-60">즉시 연락 드리겠습니다.</div>
        </div>
        <div className="flex flex-col desktop:hidden">
          <div className="mobile:text-[18px] text-[24px] opacity-60 mt-[38px]">
            여러분이 필요한 영상을 빠르게 제작하기 위해 <br />
            플루닛 영상제작소가 즉시 연락 드리겠습니다.
          </div>
        </div>

        <div className="text-[18px] mobile:text-white mobile:opacity-80 text-[#666666] mobile:mt-[25px] mt-[30px]">
          <div className="hidden mobile:flex font-bold text-[#666666] justify-center">E-MAIL</div>
          henry.lim@saltlux.com
        </div>
        <div className="w-full mt-[60px]">
          <div className="relative bg-[#141414] border border-white border-opacity-15 rounded-[10px] h-[61px] mb-[20px]">
            <input
              disabled
              className="w-full bg-transparent bg-[#141414] h-full px-[40px]"
              type="text"
              placeholder="영상 유형 선택"
            />
            <div className="absolute right-[30px] top-[45%]">
              <IcArrow />
            </div>
          </div>
          <div className=" bg-[#141414] border border-white border-opacity-15 rounded-[10px] h-[61px] mb-[20px]">
            <input
              className="w-full bg-transparent bg-[#141414] h-full px-[40px]"
              type="text"
              placeholder="연락 받으실 담당자 성함"
            />
          </div>
          <div className=" bg-[#141414] border border-white border-opacity-15 rounded-[10px] h-[61px] mb-[20px]">
            <input
              className="w-full bg-transparent bg-[#141414] h-full px-[40px]"
              type="text"
              placeholder="이메일"
            />
          </div>
          <div className=" bg-[#141414] border border-white border-opacity-15 rounded-[10px] h-[61px] mb-[20px]">
            <input
              className="w-full bg-transparent bg-[#141414] h-full px-[40px]"
              type="text"
              placeholder="휴대폰 번호"
            />
          </div>
          <div className="w-full bg-[#141414] border border-white border-opacity-15 rounded-[10px] h-[278px] mobile:h-[296px] mb-[20px]">
            <textarea
              className="w-full mobile:h-[296px] h-[278px]  bg-transparent bg-[#141414] h-full px-[40px] py-[27px]"
              placeholder={`의뢰하실 영상내용
아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.

고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등
영상 장르 : 홍보,프로모션/IR/프레젠테이션 등
내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.`}
            />
          </div>
          <div className=" bg-[#141414] border border-white border-opacity-15 rounded-[10px] h-[61px] mb-[20px]">
            <input
              className="w-full bg-transparent bg-[#141414] h-full px-[40px]"
              type="text"
              placeholder="참고 영상"
            />
          </div>
          <div className="text-[#FF6D51] flex flex-row items-center mobile:text-left mobile:pl-2 pl-4 mobile:mt-[50px]">
            <div className="text-[24px] font-bold desktop:mt-2 mr-1">*</div>
            <div className="mobile:text-12">
              참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히
              안내해드리겠습니다.
            </div>
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row justify-start items-start w-full items-center desktop:my-[155px]">
          <div className="mr-[16px] mobile:hidden">
            {" "}
            <IcCheck />{" "}
          </div>
          <div className="flex-1 mobile:hidden">개인정보처리방침에 동의합니다.</div>
          <div className="flex flex-row desktop:hidden justify-start items-center w-full text-[14px] mt-[60px]">
            <IcCheck size={15} /> <span className="ml-[8px]">개인정보처리방침에 동의합니다.</span>
          </div>
          <div className="mobile:w-full mobile:my-[60px]">
            <div className="mobile:w-full bg-[#FF6D51] rounded-[8px] py-[16px] px-[28px] mobile:text-[16px] text-[20px] font-bold">
              문의 보내기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
