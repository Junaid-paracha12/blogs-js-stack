"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import PopupModal from "./PopupModal";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const [popupModalState, setPopupModalState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 opacity-100 z-40 mx-2 md:mx-3.5 rounded-bl-xl rounded-br-xl ${
          navState ? "bg-slate-300/60 backdrop-blur-md top-0 py-3 " : " top-3 "
        } transition-all duration-300 `}
      >
        <nav className=" flex items-center justify-between px-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <a href="/" className="flex items-center ">
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pr-1">
                United UI
              </h1>
            </a>
            <button className="rounded-2xl border-2 border-black px-1.5 md:px-3 text-xs font-semibold py-0.5 md:py-1">
              Design Journal
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-3">
              <li className="text-sm font-semibold">Home</li>
              <li className="text-sm font-semibold flex items-center gap-0.5">
                Product
                <Image
                  src={"/down.png"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="w-3 h-3"
                />
              </li>
              <li className="text-sm font-semibold flex items-center gap-0.5">
                Solution
                <Image
                  src={"/down.png"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="w-3 h-3"
                />
              </li>
              <li className="text-sm font-semibold">Pricing</li>
              <li className="text-sm font-semibold flex items-center gap-0.5">
                Resources
                <Image
                  src={"/down.png"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="w-3 h-3"
                />
              </li>
              <li className="text-sm font-semibold flex items-center gap-0.5">
                Company
                <Image
                  src={"/down.png"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="w-3 h-3"
                />
              </li>
              <li className="text-sm font-semibold flex items-center gap-0.5">
                Careers
                <Image
                  src={"/down.png"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="w-3 h-3"
                />
              </li>
            </ul>
            <ul className="flex items-center gap-3">
              <li className="">
                <button
                  type="button"
                  className="px-2.5 text-base font-semibold"
                >
                  Log In
                </button>
              </li>
              <li className="">
                <button type="button" className="button-style">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>

          <ul className="lg:hidden flex items-center ">
            <li className=" grid items-center">
              <button
                className={`flex items-center gap-0.5  ${
                  navState ? "" : " "
                } p-1.5 rounded-full`}
                onClick={() => setPopupModalState(!popupModalState)}
              >
                <Image
                  src="/menu.png"
                  alt="menu/png"
                  width={20}
                  height={20}
                  className={`   ${navState ? "text-white" : "text-black"}`}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {popupModalState && <PopupModal />}
    </>
  );
}
