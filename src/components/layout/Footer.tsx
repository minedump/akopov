import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-[120px] px-6">
      <div className="flex flex-col md:flex-row gap-20">
        <img
          width={180}
          height={12}
          src="images/logo.svg"
          className="invert m-[0_auto]"
        />

        <div className="m-[0_auto]">
          <span className="flex flex-col">
            <span> телеграм: alexakopov </span>
            <span> почта: info@akopov.design </span>
            <span> телефон: +7 916 703 69-80 </span>
          </span>
        </div>
      </div>
    </footer>
  );
};
