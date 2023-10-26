import React from "react";
import { useState } from "react";
import Nav from "./Nav.jsx";
export default function Header() {
  const [nav, setNav] = useState(true);
  function handleClick() {
    setNav(!nav);
    console.log("Hola");
  }
  return (
    <header class="mx-auto bg-primario w-full h-16 flex items-center justify-between fixed top-0 left-0 z-10">
      <div class="pl-6 h-full w-52">
        <img
          src="/newportafolio/logos/5.png"
          class="object-cover h-full w-full"
          alt="logo"
          id="logo"
        />
      </div>
      <button
        onClick={handleClick}
        class="text-2xl mr-6 select-none block md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-deep" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 6h16"></path>
        <path d="M7 12h13"></path>
        <path d="M10 18h10"></path>
</svg>
      </button>
      <Nav type={nav ? "-right-[24rem]" : "right-[9rem]"} />
    </header>
  );
}
