import React from "react";

export default function Secfive() {
  return (
    <div className="bg-[rgba(248,248,248,1)] md:mt-[244px] rounded-3xl flex md:max-w-[1110px] md:max-h-[480px] max-md:flex max-md:flex-col max-md:mt-[196px]">
      <div className="flex md:ml-[61px] md:min-w-[300px]  max-md:flex max-md:justify-center bg-[rgba(248,248,248,1)] rounded-xl">
        <img
          src="/imgs/secfive.png"
          alt=""
          className="max-md:w-[302px] max-md:h-[369px]"
        />
      </div>
      <div className=" flex md:text-balance md:text-[40px] md:pt-[100px] md:pl-[55px]  md:flex-wrap max-md:mt-[32px]  max-md:flex max-md:justify-center max-md:text-center max-md:flex-col">
        <h4 className="">Kitob o’qishdan rohatlaning. Hoziroq yuklab oling</h4>
        <div className="flex md:gap-11 md:mt-[50px] max-md:mt-[32px] max-md:gap-[10px]">
          <img
            src="/imgs/Google Play - eng.svg"
            alt=""
            className="max-md:w-162 max-md:h-[47]"
          />
          <img
            src="/imgs/App Store - eng.svg"
            alt=""
            className="max-md:w-162 max-md:h-[47]"
          />
        </div>
      </div>
    </div>
  );
}
