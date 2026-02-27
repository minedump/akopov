import React from "react";
import Link from "next/link";
import { NAVIGATION } from "@/lib/constants";

export const Header: React.FC = () => {
  return (
    <header className="bg-transparent fixed w-full">
      <nav className="flex justify-between px-6 pt-6">
        <img src="images/logo.svg" alt="" />
        <img src="icons/menu.svg" alt="" />
      </nav>
    </header>
  );
};
