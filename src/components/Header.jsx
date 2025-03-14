import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="header">
      <div className="max-w-[1110px] mx-auto  max-md:px-5">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
