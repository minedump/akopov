"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  return (
    <header className="bg-transparent z-[2] fixed w-full">
      <nav className="flex justify-between px-6 pt-6 md:pt-16 md:px-16">
        <Link href="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <img
          src="/icons/menu.svg"
          alt="menu"
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>
      {createPortal(
        <div
          className={`${isMenuOpen ? "block" : "hidden"} fixed z-[3] top-0 right-0 w-screen h-full backdrop-blur-sm md:max-w-[345px] p-6 md:p-16 bg-[#121212E5]`}
        >
          <div className="flex flex-col items-end">
            <img
              src="/icons/cross.svg"
              alt="close menu"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="text-white text-end mt-20 ">
              <p className="mb-6 text-[12px]">разделы портфолио</p>

              <div className="flex text-xl font-bold flex-col gap-2">
                <Link href="/retail">
                  <p>ритейл</p>
                </Link>
                <Link href="/interiors">
                  <p>жилые интерьеры</p>
                </Link>
                <Link href="/graphics">
                  <p>графический дизайн</p>
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
};
