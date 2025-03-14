import React from "react";
import SectionOne from "./SectionOne";
import SecTwo from "./SecTwo";
import Secthree from "./Secthree";
import Secfour from "./Secfour";
import Secfive from "./Secfive";

export default function Main() {
  return (
    <div className="max-w-[1110px] mx-auto relative  max-md:px-5">
      <SectionOne />
      <SecTwo />
      <Secthree />
      <Secfour />
      <Secfive />
    </div>
  );
}
