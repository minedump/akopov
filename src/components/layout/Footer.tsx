import React from "react";

export const Footer: React.FC = () => {

  return (
    <footer className="py-[120px] md:py-[224px] bg-white px-6">
      <div className="flex flex-col md:flex-row gap-20">

        <div className="m-[0_auto] h-full min-h-[86px] flex items-center">
          <img
            width={180}
            height={12}
            src="/images/logo.svg"
            className="invert m-[0_auto]"
          />
        </div>

        <div className="w-full h-[1px] bg-black md:w-[1px] md:h-auto" />

        <div className="m-[0_auto]">
          <span className="flex flex-col py-[1rem]">
            <span> телеграм: alexakopov </span>
            <span> почта: info@akopov.design </span>
            <span> телефон: +7 916 703 69-80 </span>
          </span>
        </div>

      </div>
    </footer>
  );
};
