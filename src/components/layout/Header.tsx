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

      {/* Меню с CSS классами для анимации */}
      {isMounted && (
        <div 
          className={`menu-overlay fixed z-[3] top-0 right-0 w-screen h-full md:max-w-[345px] p-6 md:p-16 ${
            isMenuOpen ? 'open' : 'closed'
          }`}
        >
          <div className="flex flex-col items-end w-full h-full">

            {/* Отступ сверху */}
            <div className="h-12 md:h-20"></div>
            
            {/* Контент меню */}
            <div className="menu-content text-white text-end w-full">

              <div className="flex text-xl font-bold flex-col gap-2 mb-6">
                <Link className="menu-item" href="/" onClick={toggleMenu}>
                  <p className="hover:opacity-70 transition-opacity">
                    главная
                  </p>
                </Link>
              </div>

              <p className="mb-6 text-[12px] opacity-70">направления:</p>
              <div className="flex text-xl font-bold flex-col gap-2">
                <Link className="menu-item" href="/retail" onClick={toggleMenu}>
                  <p className="hover:opacity-70 transition-opacity">
                    ритейл
                  </p>
                </Link>
                <Link className="menu-item" href="/interiors" onClick={toggleMenu}>
                  <p className="hover:opacity-70 transition-opacity">
                    жилые интерьеры
                  </p>
                </Link>
                <Link className="menu-item" href="/graphics" onClick={toggleMenu}>
                  <p className="hover:opacity-70 transition-opacity">
                    графический дизайн
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};