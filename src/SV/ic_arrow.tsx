import React from "react";

const IcArrow = () => {
  return (
    <>
      <svg
        className="mobile:hidden"
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L12 12L22 2"
          stroke="url(#paint0_linear_441_51)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_441_51"
            x1="2"
            y1="2"
            x2="10"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF4E83" />
            <stop offset="1" stop-color="#FFBB54" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="desktop:hidden"
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L9.5 9.5L17 2"
          stroke="url(#paint0_linear_441_12)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_441_12"
            x1="2"
            y1="2"
            x2="8"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF4E83" />
            <stop offset="1" stop-color="#FFBB54" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default IcArrow;
