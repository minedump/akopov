import { Metadata } from "@/components/seo/Metadata";
import { OpenGraph } from "@/components/seo/OpenGraph";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export default function HomePage() {
  return (
    <>
      <Metadata title="Главная" />
      <OpenGraph title="Главная - Мой Сайт" />
      <SchemaMarkup type="WebSite" />

      <div className="h-full">
        <div className="h-[100vh] flex items-end p-6 bg-green-400">
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
      </div>
    </>
  );
}
