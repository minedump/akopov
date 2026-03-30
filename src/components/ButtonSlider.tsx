import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "living-room.webp",
    text: "Из чистоты рождается место сосредоточения: мысль обретает контур, тишина — структуру, а пространство становится средой для решений, где форма дисциплинирует содержание и направляет волю.",
  },
  {
    image: "bedroom.webp",
    text: "Лист наполняется покоем: форма смягчается, свет углубляется, и возникает личная территория присутствия и восстановления — пространство, где внутреннее звучит ясно и без искажений.",
  },
  {
    image: "hallway.webp",
    text: "Пространство принимает характер: огонь, фактура, предметы выстраиваются в систему, и из нейтральности возникает сцена для диалога, ритуала и проявления силы.",
  },
];

interface ButtonSliderProps {
  animationMode?: "fade-out-in" | "crossfade";
  fadeDuration?: number;
  resetDelay?: number;
}

const ButtonSlider = ({ 
  animationMode = "crossfade",
  fadeDuration = 300,
  resetDelay = 9000
}: ButtonSliderProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [container1Image, setContainer1Image] = useState<string | null>(null);
  const [container2Image, setContainer2Image] = useState<string | null>(null);
  const [isContainer1Visible, setIsContainer1Visible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Используем ref для хранения актуальных значений пропсов
  const fadeDurationRef = useRef(fadeDuration);
  const resetDelayRef = useRef(resetDelay);
  const animationModeRef = useRef(animationMode);
  
  // Обновляем refs при изменении пропсов
  useEffect(() => {
    fadeDurationRef.current = fadeDuration;
  }, [fadeDuration]);
  
  useEffect(() => {
    resetDelayRef.current = resetDelay;
  }, [resetDelay]);
  
  useEffect(() => {
    animationModeRef.current = animationMode;
  }, [animationMode]);

  // Предзагрузка всех изображений
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = `images/${slide.image}`;
    });
  }, []);

  // Функция для сброса к пустой комнате
  const resetToEmpty = () => {
    if (activeIndex !== null && !isAnimating) {
      setIsAnimating(true);
      
      const timeout = setTimeout(() => {
        // Очищаем все изображения
        setActiveIndex(null);
        setContainer1Image(null);
        setContainer2Image(null);
        setIsContainer1Visible(true);
        setIsAnimating(false);
      }, fadeDurationRef.current);
      
      timeoutRef.current = timeout;
    }
  };

  // Таймер для автоматического сброса
  useEffect(() => {
    if (activeIndex === null) return;
    
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    
    resetTimeoutRef.current = setTimeout(() => {
      resetToEmpty();
    }, resetDelayRef.current);
    
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [activeIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    
    const newIndex = activeIndex === null ? 0 : (activeIndex + 1) % slides.length;
    const newImage = slides[newIndex].image;
    
    setIsAnimating(true);
    
    if (animationModeRef.current === "crossfade") {
      // Определяем, в какой контейнер загружать новое изображение
      if (container1Image === null && container2Image === null) {
        // Первое изображение - загружаем в контейнер 1
        setContainer1Image(newImage);
        setIsContainer1Visible(true);
        setActiveIndex(newIndex);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      } else {
        // Загружаем новое изображение в невидимый контейнер
        if (isContainer1Visible) {
          setContainer2Image(newImage);
          // Меняем видимость: контейнер 2 становится видимым, контейнер 1 - невидимым
          setIsContainer1Visible(false);
        } else {
          setContainer1Image(newImage);
          // Меняем видимость: контейнер 1 становится видимым, контейнер 2 - невидимым
          setIsContainer1Visible(true);
        }
        
        setActiveIndex(newIndex);
        
        // Через время анимации снимаем блокировку
        setTimeout(() => {
          setIsAnimating(false);
        }, fadeDurationRef.current);
      }
    } else {
      // Режим fade-out-in - просто меняем изображение с анимацией исчезновения/появления
      if (container1Image === null && container2Image === null) {
        setContainer1Image(newImage);
        setIsContainer1Visible(true);
        setActiveIndex(newIndex);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      } else {
        // Обновляем изображение в видимом контейнере
        if (isContainer1Visible) {
          setContainer1Image(newImage);
        } else {
          setContainer2Image(newImage);
        }
        setActiveIndex(newIndex);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, fadeDurationRef.current);
      }
    }
  };

  // Очистка таймеров при размонтировании
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const currentSlide = activeIndex !== null ? slides[activeIndex] : null;
  
  // Получаем текущее видимое изображение для fade-out-in режима
  const getVisibleImage = () => {
    if (isContainer1Visible) return container1Image;
    return container2Image;
  };

  return (
    <div className="h-dvh flex flex-col md:flex-col">
      {/* Первый контейнер - с изображением */}
      <div 
        className={`
          relative bg-cover bg-center bg-no-repeat overflow-hidden
          md:flex-1
          h-[320px] md:h-none
        `}
        style={{ backgroundImage: `url('images/backroom.webp')` }}
      >
        {animationModeRef.current === "crossfade" ? (
          // Режим crossfade - два контейнера с чередованием прозрачности
          <>
            {/* Контейнер 1 */}
            {container1Image && (
              <img
                src={`images/${container1Image}`}
                alt="Slide"
                className="absolute inset-0 w-full h-full object-cover transition-opacity"
                style={{
                  opacity: isContainer1Visible ? 1 : 0,
                  transitionDuration: `${fadeDurationRef.current}ms`,
                  transitionTimingFunction: "ease-in-out",
                  zIndex: isContainer1Visible ? 2 : 1,
                }}
              />
            )}
            {/* Контейнер 2 */}
            {container2Image && (
              <img
                src={`images/${container2Image}`}
                alt="Slide"
                className="absolute inset-0 w-full h-full object-cover transition-opacity"
                style={{
                  opacity: !isContainer1Visible ? 1 : 0,
                  transitionDuration: `${fadeDurationRef.current}ms`,
                  transitionTimingFunction: "ease-in-out",
                  zIndex: !isContainer1Visible ? 2 : 1,
                }}
              />
            )}
          </>
        ) : (
          // Режим fade-out-in - один видимый контейнер
          getVisibleImage() && (
            <img
              src={`images/${getVisibleImage()}`}
              alt="Slide"
              className="absolute inset-0 w-full h-full object-cover transition-opacity"
              style={{
                opacity: isAnimating ? 0 : 1,
                transitionDuration: `${fadeDurationRef.current}ms`,
                transitionTimingFunction: "ease-in-out",
              }}
            />
          )
        )}
      </div>

      {/* Второй контейнер - с контентом */}
      <div className={`
        bg-light-gray 
        grid grid-rows-[1fr_auto_1fr] 
        justify-items-center gap-8 p-6 items-center 
        lg:justify-items-start lg:grid-rows-none lg:grid-cols-[1fr_auto_1fr] 
        lg:p-16 lg:gap-16 justify-center
        flex-1 md:flex-none
      `}>
        <p 
          className="text-base transition-opacity"
          style={{
            transitionDuration: `${fadeDurationRef.current}ms`,
            transitionTimingFunction: "ease-in-out",
            opacity: isAnimating && animationModeRef.current === "fade-out-in" ? 0 : 1,
          }}
        >
          {currentSlide?.text || ""}
        </p>
        
        <button 
          onClick={handleNext} 
          disabled={isAnimating}
          className={isAnimating ? "opacity-50 cursor-not-allowed" : ""}
        >
          <span className="md:hidden">
            <img src="images/start-mobile.svg" alt="Next" />
          </span>
          <span className="hidden md:block">
            <img src="images/start-desktop.svg" alt="Next" />
          </span>
        </button>
        
        <p className="md:text-xl text-base">
          все начинается с чистого листа. <br /> нажмите, чтобы увидеть больше.
        </p>
      </div>
    </div>
  );
};

export default ButtonSlider;