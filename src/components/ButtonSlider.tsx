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

const ButtonSlider = () => {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Предзагрузка всех изображений
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = `images/${slide.image}`;
    });
  }, []);

  // Функция для сброса к пустой комнате
  const resetToEmpty = () => {
    if (currentIndex !== null && !isTransitioning) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setCurrentIndex(null);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
      timeoutRef.current = timeout;
    }
  };

  // Таймер для автоматического сброса
  useEffect(() => {

    // Не запускаем таймер, если уже пустая комната
    if (currentIndex === null) return;
    
    // Сбрасываем предыдущий таймер
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    
    // Устанавливаем таймер на 9 секунд
    resetTimeoutRef.current = setTimeout(() => {
      resetToEmpty();
    }, 9000);
    
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [currentIndex, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    // Сбрасываем таймер автовозврата
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    
    setIsTransitioning(true);
    
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % slides.length;
      });
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
      
    }, 300);
  };

  // Очистка таймеров при размонтировании
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  // Определяем, показывать ли изображение
  const showImage = currentIndex !== null;
  const currentSlide = showImage ? slides[currentIndex as number] : null;

  return (
<div className="h-screen flex flex-col md:flex-col">
  {/* Первый контейнер - с изображением */}
  <div 
    className={`
      relative bg-cover bg-center bg-no-repeat overflow-hidden
      md:flex-1
      h-[320px] md:h-none
    `}
    style={{ backgroundImage: `url('images/backroom.webp')` }}
  >
    {showImage && (
      <img
        src={`images/${currentSlide?.image}`}
        alt={`Slide ${(currentIndex as number) + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      />
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
    <p className={`text-base transition-opacity duration-300 ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
    }`}>
      {showImage ? currentSlide?.text : ""}
    </p>
    
    <button onClick={handleNext} disabled={isTransitioning}>
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