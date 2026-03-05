"use client";

import { useRouter } from "next/navigation";
import { Metadata } from "@/components/seo/Metadata";
import { OpenGraph } from "@/components/seo/OpenGraph";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [isTextVisible, setIsTextVisible] = useState(false);
  return (
    <>
      <Metadata title="Главная" />
      <OpenGraph title="Главная - Мой Сайт" />
      <SchemaMarkup type="WebSite" />

      <div className="h-full">
        <div className="h-screen flex items-end p-6 bg-[url('/images/man.jpg')] bg-cover bg-[60%_10%] md:bg-center">
          <div className="text-white">
            <p className="mb-4">SKY VIEW</p>
            <p>
              design review <br /> Alexander Akopov <br /> dec 2025
            </p>
          </div>
        </div>
        <div className="px-16 pt-[120px] pb-10 sm:pb-[120px]">
          <div className="flex flex-col gap-20 border-b border-b-black pb-20 md:pb-0 md:border-b-0 sm:flex-row sm:gap-16 ">
            <p className="max-w-[400px]">
              akopov·design – бутик-агентство, основанное в 2019 году. <br />{" "}
              <br />
              Мы создаем проекты, в которых эстетика соединяется с глубиной
              идеи. Благодаря экспертизе и смелости визуальных решений
              мы раскрываем индивидуальность клиента в физической или цифровой
              среде.
            </p>
            <p className="max-w-[400px]">
              Разные дисциплины соединяются в едином подходе. <br />
              <br /> Дизайн интерьера – ритейл, коммерческие и жилые
              пространства. Графический дизайн – от айдентики и веба до упаковки
              и коммуникационных материалов.
            </p>
          </div>
        </div>

        <div className="px-6 py-16 md:px-16 md:py-[120px] lg:py-36 ">
          <div className="flex flex-col md:items-end gap-[87px] sm:gap-0 md:justify-end ">
            <p className="md:max-w-80 lg:max-w-[656px]">
              Пространство - это зеркало. Оно никогда не спорит с отражением, но
              молча и честно транслирует его содержание. Каждый элемент оболочки
              - это отпечаток ее наполнения. Взаимодействуя с ней, можно увидеть
              суть. Наша миссия - отражение внутренних смыслов,
              через инструменты сенсорного восприятия. Раскрывая душу языком
              формы.
            </p>
            <img
              className="md:hidden"
              src="images/text-mobile.svg"
              alt="mobile"
            />
            <img
              className="hidden md:block lg:hidden"
              src="images/text-laptop.svg"
              alt="laptop"
            />
            <img
              className="hidden lg:block"
              src="images/text-desktop.svg"
              alt="desktop"
            />
          </div>
        </div>

        <div className="h-screen flex flex-col">
          <img
            className="md:hidden w-full flex-1 min-h-0"
            src="images/backrooms-mobile.webp"
            alt="mobile"
          />
          <img
            className="hidden md:block lg:hidden w-full flex-1 min-h-0"
            src="images/backrooms-laptop.webp"
            alt="laptop"
          />
          <img
            className="hidden lg:block w-full flex-1 min-h-0"
            src="images/backrooms-dekstop.webp"
            alt="desktop"
          />

          <div className="grid grid-rows-[1fr_auto_1fr] justify-items-center gap-8 p-6 items-center lg:justify-items-start lg:grid-rows-none lg:grid-cols-[1fr_auto_1fr] lg:p-16 lg:gap-16 justify-center">
            <p>
              {" "}
              {isTextVisible &&
                "Из чистоты рождается место сосредоточения: мысль обретает контур, тишина — структуру, а пространство становится средой для решений, где форма дисциплинирует содержание и направляет волю."}{" "}
            </p>
            <button onClick={() => setIsTextVisible(!isTextVisible)}>
              <span className="md:hidden">
                <img src="images/start-mobile.svg" />
              </span>
              <span className="hidden md:block">
                <img src="images/start-desktop.svg" alt="" />
              </span>
            </button>
            <p>
              все начинается с чистого листа. <br /> нажмите, чтобы увидеть
              больше.
            </p>
          </div>
        </div>

        <div className="h-screen relative">
          <div className="absolute top-[40%] pl-6 md:left-1/2 md:top-1/3 md:-translate-x-1/2 md:-translate-y-1/2 md:pl-0 md:text-center ">
            <p className="mb-12 md:mb-8">разделы портфолио</p>
            <div className="flex flex-col gap-4 md:flex-row  md:gap-16">
              <h1
                onClick={() => router.push("/retail")}
                className="font-bold text-xl cursor-pointer"
              >
                ритейл
              </h1>
              <h1
                onClick={() => router.push("/interiors")}
                className="font-bold text-xl cursor-pointer"
              >
                интерьеры
              </h1>
              <h1
                onClick={() => router.push("/graphics")}
                className="font-bold text-xl cursor-pointer"
              >
                графика
              </h1>
            </div>
          </div>
          <img
            className="md:hidden w-full h-[stretch] object-cover"
            src="images/building-split.jpg"
            alt=""
          />
          <img
            className="hidden md:block w-full h-[stretch] object-cover"
            src="images/building-full.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
