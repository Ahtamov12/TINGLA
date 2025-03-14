import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menu, setMenu] = useState();
  return (
    <div className="mt-[60px] flex justify-between">
      <img src="/imgs/logo.svg" alt="" />
      {!menu ? (
        <IoIosMenu
          onClick={() => setMenu(!menu)}
          className="md:hidden text-3xl"
        />
      ) : (
        <IoMdClose onClick={() => setMenu(!menu)} />
      )}
      <ul
        className={`flex justify-center items-center gap-[16px]  text-lg  max-md:absolute max-md:flex-col max-md:bg-[#413f3f79] max-md:w-[90%] max-md:rounded max-md:text-white max-md:py-5 transition-all    ${
          menu ? " max-md:top-[120px]" : " max-md:top-[-320px]"
        }`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
