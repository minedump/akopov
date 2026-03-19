import React, { useState } from "react";

const images = ["backrooms-dekstop.webp", "room.png"];

const texts = [
  "Лист наполняется покоем: форма смягчается, свет углубляется, и возникает личная территория присутствия и восстановления — пространство, где внутреннее звучит ясно и без искажений.",
  "Пространство принимает характер: огонь, фактура, предметы выстраиваются в систему, и из нейтральности возникает сцена для диалога, ритуала и проявления силы.",
  "Из чистоты рождается место сосредоточения: мысль обретает контур, тишина — структуру, а пространство становится средой для решений, где форма дисциплинирует содержание и направляет волю.",
  "",
];

const ButtonSlider = () => {
  const [roomTextState, setRoomTextState] = useState(0);
  return (
    <div className="h-screen flex flex-col">
      <img
        src={`images/${images[roomTextState]}`}
        key={roomTextState}
        className="min-h-[320px] object-cover img-animate"
      />

      <div className="grid grid-rows-[1fr_auto_1fr] justify-items-center gap-8 p-6 items-center lg:justify-items-start lg:grid-rows-none lg:grid-cols-[1fr_auto_1fr] lg:p-16 lg:gap-16 justify-center">
        <p>
          {" "}
          {roomTextState === 1
            ? texts[0]
            : roomTextState === 2
              ? texts[1]
              : roomTextState === 3
                ? texts[2]
                : ""}
        </p>
        <button
          onClick={() =>
            setRoomTextState(roomTextState === 3 ? 0 : roomTextState + 1)
          }
        >
          <span className="md:hidden">
            <img src="images/start-mobile.svg" />
          </span>
          <span className="hidden md:block">
            <img src="images/start-desktop.svg" alt="" />
          </span>
        </button>
        <p>
          все начинается с чистого листа. <br /> нажмите, чтобы увидеть больше.
        </p>
      </div>
    </div>
  );
};

export default ButtonSlider;
