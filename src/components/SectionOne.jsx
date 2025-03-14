import React from "react";

export default function SectionOne() {
  return (
    <div className="relative max-w-[1110px] h-[500px] mt-[294px]  max-md:h-[190px]  max-md:mt-10">
      <div className="shadow h-full  absolute left-0 top-0 w-full rounded-[20px] flex items-center justify-center">
        <img
          className=" max-md:h-10  max-md:w-10"
          src="/imgs/PlayCircle.svg"
          alt=""
        />
      </div>
      <img className="  max-md:h-full " src="/imgs/secone.png" alt="" />
    </div>
  );
}
