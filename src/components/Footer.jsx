import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 max-w-[1110px]  mt-[170px] max-md:grid max-md:grid-cols-1  mx-4  md:mx-auto">
      <div className="flex flex-col items-start">
        <img src="/imgs/logo.svg" alt="" />
        <p className="pt-[43px]">Barcha huquqlar himoyalangan</p>
      </div>
      <ul className="pt-[16px] space-y-2  max-md:mt-[44px] ">
        <li>
          <a href="#">Maxfiylik siyosati</a>
        </li>
        <li>
          <a href="#">Ommaviy oferta</a>
        </li>
        <li>
          <a href="#">Foydalanish qoidalari</a>
        </li>
      </ul>
      <div className="flex flex-col space-y-2 mb-10  max-md:flex max-md:mt-[44px]">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <div className="flex flex-col">
            <p>Telefon raqam</p>
            <span>+998 99 991-15-25</span>
          </div>
        </div>
        <div className="flex gap-5 mt-5 text-2xl">
          <RiTelegramLine />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
}
