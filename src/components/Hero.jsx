import React from "react";

export default function Hero() {
  return (
    <div className="flex max-md:flex-col-reverse">
      <div className="flex flex-col">
        <h1 className="text-[80px] mt-[154px]  max-md:text-[36px]  max-md:mt-6">
          Biz bilan har lahza —unumli
        </h1>
        <p className="text-[24px] mt-[24px]  max-md:text-lg  max-md:mt-3">
          Tingla ilovasi orqali nodir asarlarning audio shaklida tinlashingiz va
          elektron tarzda mutolaa qilishingiz mumkin.
        </p>
        <button className=" w-50 h-15 text-white bg-blue-950  hover:bg-blue-800 text-base font-semibold rounded-xl mt-[60px]  max-md:mt-6  max-md:w-40  max-md:h-12  max-md:rounded-lg  max-md:text-lg">
          Yuklab olish
        </button>
      </div>
      <div className="mt-[100px]  max-md:mt-10  max-md:flex  max-md:justify-center">
        <img src="/imgs/hero.png" alt="" className="max-md:w-[280px]" />
      </div>
    </div>
  );
}
