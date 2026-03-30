"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { Metadata } from "@/components/seo/Metadata";
import { OpenGraph } from "@/components/seo/OpenGraph";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import ButtonSlider from "@/components/ButtonSlider";

// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/navigation";

export default function HomePage() {
  const router = useRouter();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const swiperRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Предзагрузка всех изображений
  useEffect(() => {
    const imagesToPreload = [
      "/images/slide-1.webp",
      "/images/slide-1-mobile.webp",
      "/images/slide-2.webp",
      "/images/slide-2-mobile.webp",
      "/images/slide-3.webp",
      "/images/slide-3-mobile.webp",
    ];

    let loadedCount = 0;
    
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          setImagesPreloaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          setImagesPreloaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  // Обработчик окончания видео
  const handleVideoEnd = () => {
    if (swiperRef.current && swiperIndex === 2) {
      swiperRef.current.slideNext(); // Переход к следующему слайду
    }
  };

  // Управление автопрокруткой в зависимости от активного слайда
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (swiperIndex === 2) {
        // Останавливаем автопрокрутку на слайде с видео
        swiperRef.current.autoplay.stop();
      } else {
        // Запускаем автопрокрутку на остальных слайдах
        swiperRef.current.autoplay.start();
      }
    }
  }, [swiperIndex]);

  // Управление воспроизведением видео
  useEffect(() => {
    if (swiperIndex === 2 && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Автовоспроизведение видео не удалось:", error);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [swiperIndex]);

  return (
    <>
      <Metadata title="Главная" />
      <OpenGraph title="Главная - Мой Сайт" />
      <SchemaMarkup type="WebSite" />

      <div className="h-full">
        <div className="relative h-dvh flex items-end">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={true}
            loop={true}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="mySwiper h-full w-full"
          >
            <SwiperSlide>
              <picture>
                <source 
                  media="(max-width: 768px)" 
                  srcSet="/images/slide-1-mobile.webp" 
                />
                <img
                  src="/images/slide-1.webp"
                  className="h-full w-full object-cover"
                  alt="SKY VIEW проверка чертежей"
                  loading="eager"
                />
              </picture>
            </SwiperSlide>
            
            <SwiperSlide>
              <picture>
                <source 
                  media="(max-width: 768px)" 
                  srcSet="/images/slide-2-mobile.webp" 
                />
                <img
                  src="/images/slide-2.webp"
                  className="h-full w-full object-cover"
                  alt="SKY VIEW авторский надзор"
                  loading="eager"
                />
              </picture>
            </SwiperSlide>
            
            <SwiperSlide>
              {!imagesPreloaded && (
                <picture>
                  <source 
                    media="(max-width: 768px)" 
                    srcSet="/images/slide-3-mobile.webp" 
                  />
                  <img
                    src="/images/slide-3.webp"
                    className="h-full w-full object-cover"
                    alt="L'Oreal Paris"
                    loading="eager"
                  />
                </picture>
              )}
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster="/images/slide-3.webp"
                onEnded={handleVideoEnd}
                playsInline
                muted
                preload="auto"
              >
                <source src="/images/slide-3.webm" type="video/webm" />
                <source src="/images/slide-3.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
          </Swiper>
          

          <div className="md:text-xl text-base px-6 md:px-16 text-white absolute left-0 bottom-0 z-[1] p-6 md:p-16">
            <p className="mb-4">
              { 
                swiperIndex === 0 ? "SKY VIEW" :
                swiperIndex === 1 ? "SKY VIEW" :
                swiperIndex === 2 ? "L'Oreal Paris" : ""
              }
            </p>
            <p className="whitespace-pre-line">
              {
                swiperIndex === 0 ? "проверка чертежей\nАлександр Акопов\n2025" :
                swiperIndex === 1 ? "авторский надзор\nАлександр Акопов\n2026" :
                swiperIndex === 2 ? "презентация торгового оборудования\n3D-анимация\n2026" : ""
              }
            </p>
          </div>


        </div>
        
        <div className="bg-noise">
          <div className="px-6 md:px-16 pt-[120px] pb-16 sm:pb-[120px]">
            <div className="flex flex-col gap-20 border-b border-b-black pb-20 md:pb-0 md:border-b-0 sm:flex-row sm:gap-16 ">

              <div className="max-w-[400px]">
                <p>akopov·design – бутик-агентство, основанное в 2019 году.</p>
                <br />
                <p>Мы создаем проекты, в которых эстетика соединяется с глубиной
                идеи. Благодаря экспертизе и смелости визуальных решений
                мы раскрываем индивидуальность клиента в физической или цифровой
                среде.</p>
              </div>

              <div className="max-w-[400px]">
                <p>Разные дисциплины соединяются в едином подходе.</p>
                <br />
                <p>Дизайн интерьера – ритейл, коммерческие и жилые
                пространства. Графический дизайн – от айдентики и веба до
                упаковки и коммуникационных материалов.</p>
              </div>

            </div>
          </div>

          <div className="px-6 pt-16 pb-32 md:px-16 md:py-[120px] lg:py-36 ">

            <div className="md:text-xl text-base flex flex-col md:items-end gap-[87px] sm:gap-0 md:justify-end ">
              <div className="md:max-w-80 lg:max-w-[656px]">
                <p>Пространство - это зеркало. Оно никогда не спорит с отражением,
                но молча и честно транслирует его содержание.</p>
                <br />
                <p>Каждый элемент оболочки - это отпечаток ее наполнения.
                Взаимодействуя с ней, можно увидеть суть.</p>
                <br />
                <p>Наша миссия - отражение внутренних смыслов, через инструменты
                сенсорного восприятия.</p>
                <br />
                <p>Раскрывая душу языком формы.</p>
              </div>
              <img
                className="md:hidden pl-16"
                src="/images/text-mobile.svg"
                alt="Доверие и свобода"
                loading="lazy"
              />
              <img
                className="hidden md:block lg:hidden self-center"
                src="/images/text-laptop.svg"
                alt="Доверие и свобода"
                loading="lazy"
              />
              <img
                className="hidden lg:block self-center"
                src="/images/text-desktop.svg"
                alt="Доверие и свобода"
                loading="lazy"
              />
            </div>

          </div>

        </div>

        <ButtonSlider />

        <div className="md:h-[160px] h-[0] bg-light-gray" />

        <div className="h-dvh relative">
          <div className="absolute top-[40%] pl-6 md:left-1/2 md:top-1/3 md:-translate-x-1/2 md:-translate-y-1/2 md:pl-0 md:text-center ">
            <p className="mb-12 md:mb-8">разделы портфолио</p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-16">
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
            src="/images/office-half.webp"
            alt="Разделы портфолио"
            loading="lazy"
          />
          <img
            className="hidden md:block w-full h-[stretch] object-cover"
            src="/images/office.webp"
            alt="Разделы портфолио"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}