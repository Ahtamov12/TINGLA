import React from "react";

export default function Secthree() {
  return (
    <div className="relative flex items-center justify-between mt-50 gap-15 max-md:flex-col ">
      <div className="max-md:mt-[78px]">
        <img src="/imgs/secthree.png" alt="" className="md:max-w-[2000px]" />
      </div>
      <div>
        <h2 className="md:text-[50px] max-md:font-bold max-md:text-[26px] ">
          Audio-kitobning afzalliklari
        </h2>
        <p className="md:text-xl leading-relaxed max-md:text-lg max-md:pt-4 ">
          O’zingizga ma’qul bo’lgan audio-kitoblarni turli xil holatlarda,
          istalgan joyda tinglashingiz mumkin. Audio-kitoblarga to’lov
          qilganingizdan so’ng ularni istalgancha foydalanishingiz mumkin.
          Telefon xotirasiga yuklash, ilova xotirasiga saqlash va audioning
          tezligini o’zgartirish imkoniyatlari mavjud.
        </p>
      </div>
    </div>
  );
}
