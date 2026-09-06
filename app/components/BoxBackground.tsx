import React, { FC } from "react";

export const BoxBackground: FC = () => {
  return (
    <div
      id={"background"}
      className={"absolute flex flex-1 items-center justify-center"}
      style={{ zIndex: -1, left: "2%" }}
    >
      <div className={"absolute h-32 w-32 rounded-full bg-red-400 opacity-25"} />
      <div className={"absolute h-32 w-32 rounded-full bg-blue-400 opacity-75"} />
      <div className={"absolute h-32 w-32 rounded-full bg-blue-300 opacity-75"} />
      <div className={"absolute h-32 w-32 rounded-full bg-red-400 opacity-25"} />
      <div className={"absolute h-32 w-32 rounded-full bg-indigo-200 opacity-75"} />
      <div className={"absolute h-40 w-40 rounded-full bg-indigo-300 opacity-75"} />
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        version={"1.1"}
        style={{ width: 0, height: 0, position: "absolute" }}
      >
        <defs>
          <filter id={"blur"} colorInterpolationFilters={"sRGB"}>
            <feGaussianBlur in={"SourceGraphic"} stdDeviation={"7 7"} result={"blur"} />
          </filter>
          <filter id={"both"} colorInterpolationFilters={"sRGB"}>
            <feGaussianBlur in={"SourceGraphic"} stdDeviation={"7 7"} result={"blur"} />
            <feColorMatrix
              in={"blur"}
              mode={"matrix"}
              values={"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7"}
              result={"cm"}
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
