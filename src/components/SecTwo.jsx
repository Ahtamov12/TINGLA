import React from "react";

export default function SecTwo() {
  return (
    <div className="relative flex items-center justify-between bg-blue-950 text-white p-8 rounded-2xl mt-[366px]  max-md:mt-[274px]  max-md:rounded-lg  max-md:flex-col-reverse">
      <div className=" h-[480px]  max-md:h-full">
        <h2 className="text-[50px] font-bold ml-[80px] mt-[126px]  max-md:text-2xl  max-md:ml-0  max-md:mt-5">
          Loyiha haqida
        </h2>
        <p className="md:w-[450px] ml-[80px] pt-[30px] text-xl  max-md:ml-0  max-md:pt-4  max-md:text-sm">
          Yangi ko‘rinishdagi va ajoyib g‘oya bilan qilingan Tingla ilovasi
          sizga muntazir. Ushbu ilova orqali siz o‘zbek va jahon adabiyotidagi
          shoh asarlarni elektron shaklda bepul o‘qishingiz va audio tarzda
          tinglashingiz mumkin.
        </p>
      </div>

      <div className="md:absolute right-0 mt-[-206px] max-md:mt-[-156px]">
        <img
          src="/imgs/sectwo.png"
          alt=""
          className="w-full  max-md:w-[335px]"
        />
      </div>
    </div>
  );
}
