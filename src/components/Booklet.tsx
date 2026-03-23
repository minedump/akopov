"use client";

import React, { useState } from "react";

interface GraphicsBookletProps {
  desktopImages: string[];
  mobileImages: string[];
}

const GraphicsBooklet = ({
  desktopImages,
  mobileImages,
}: GraphicsBookletProps) => {
  const [mobileBookletState, setMobileBookletState] = useState(0);
  const [desktopBookletState, setDesktopBookletState] = useState(0);
  return (
    <div className="h-screen flex py-[112px] lg:py-[88px] lg:justify-center">
      <div className="lg:hidden">
        <img
          className="z-[2] relative object-contain"
          src={`${mobileImages[mobileBookletState]}`}
        />
        <div
          className="flex z-0 justify-center"
          style={{ transform: "translateY(-20px)" }}
        >
          <img
            src="/icons/case_arrow_mobile.svg"
            alt=""
            onClick={() =>
              setMobileBookletState((prev) => (prev + 1) % mobileImages.length)
            }
          />

          <img
            src="/icons/case_arrow_mobile.svg"
            style={{ transform: "rotateY(180deg)" }}
            alt=""
            onClick={() =>
              setMobileBookletState((prev) =>
                prev === 0 ? mobileImages.length - 1 : prev - 1,
              )
            }
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center   h-full">
          <img
            className="z-0"
            src="/icons/case_arrow_desk.svg"
            style={{ transform: "translateX(60px)" }}
            alt=""
            onClick={() =>
              setDesktopBookletState(
                (prev) => (prev + 1) % desktopImages.length,
              )
            }
          />
          <img
            className="z-[2] h-full w-full"
            src={`${desktopImages[desktopBookletState]}`}
          />
          <img
            className="z-0"
            src="/icons/case_arrow_desk.svg"
            style={{ transform: "rotateY(180deg) translateX(70px)" }}
            alt=""
            onClick={() =>
              setDesktopBookletState((prev) =>
                prev === 0 ? desktopImages.length - 1 : prev - 1,
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsBooklet;
