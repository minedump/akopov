"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
    
    return () => {
      if (isMounted) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isMenuOpen, isMounted]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent z-[2] fixed w-full">
      <nav className="flex justify-between items-center px-6 pt-6 md:pt-16 md:px-16">
        <Link href="/">
          <img src="/images/logo.svg" alt="AKOPOV" />
        </Link>

        <div className="z-[4]">
          <Hamburger
            toggled={isMenuOpen}
            color="white"
            onToggle={toggleMenu}
          />
        </div>
      </nav>

      {/* Меню без дублирования иконки */}
      {isMounted && isMenuOpen && (
        <div className="fixed z-[3] top-0 right-0 w-screen h-full backdrop-blur-sm md:max-w-[345px] p-6 md:p-16 bg-[#121212E5]">
          <div className="flex flex-col items-end">
            {/* Пустой div для отступа, чтобы меню не прилипало к верху */}
            <div className="h-12 md:h-16"></div>
            <div className="text-white text-end mt-20">
              <p className="mb-6 text-[12px]">разделы портфолио</p>
              <div className="flex text-xl font-bold flex-col gap-2">
                <Link href="/retail" onClick={toggleMenu}>
                  <p>ритейл</p>
                </Link>
                <Link href="/interiors" onClick={toggleMenu}>
                  <p>жилые интерьеры</p>
                </Link>
                <Link href="/graphics" onClick={toggleMenu}>
                  <p>графический дизайн</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};