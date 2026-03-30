import { useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="relative flex-1 bg-cover bg-center bg-no-repeat overflow-hidden"
           style={{ backgroundImage: `url('images/backroom.webp')` }}>
        <img
          src={`images/${slides[currentIndex].image}`}
          alt={`Slide ${currentIndex + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      <div className="bg-light-gray grid grid-rows-[1fr_auto_1fr] justify-items-center gap-8 p-6 items-center lg:justify-items-start lg:grid-rows-none lg:grid-cols-[1fr_auto_1fr] lg:p-16 lg:gap-16 justify-center">

        <p className={`text-base transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {slides[currentIndex].text}
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