import { Metadata } from "@/components/seo/Metadata";
import { OpenGraph } from "@/components/seo/OpenGraph";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Проект 1",
    category: "Веб-разработка",
    image: "/images/portfolio/project1.jpg",
    description: "Описание первого проекта",
  },
  {
    id: 2,
    title: "Проект 2",
    category: "Мобильные приложения",
    image: "/images/portfolio/project2.jpg",
    description: "Описание второго проекта",
  },
  {
    id: 3,
    title: "Проект 3",
    category: "Дизайн",
    image: "/images/portfolio/project3.jpg",
    description: "Описание третьего проекта",
  },
];

const stepsGroups = [
  [
    "интервью, аудит",
    "техническое задание",
    "коммерческое предложение, договор",
  ],
  [
    "проработка смыслов",
    "разработка дизайн-концепции",
    "реализация",
    "презентация",
  ],
];

export default function PortfolioPage() {
  return (
    <>
      <Metadata title="Портфолио" />
      <OpenGraph title="Портфолио - Мой Сайт" />
      <SchemaMarkup
        type="Organization"
        data={{
          description: "Наши выполненные проекты",
          knowsAbout: portfolioItems.map((item) => item.category),
        }}
      />

      <div className="h-full">
        <div className="h-screen flex justify-center items-center p-6 bg-red-400">
          <div className="px-16 py-10 md:px-20 text-center bg-white">
            <p className="mb-12">
              Настоящий дом – чувство внутри вас. <br /> Мы помогаем сделать его
              видимым в <br /> каждой детали интерьера.
            </p>

            <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-20">
              <p className="font-bold">услуги</p>
              <p className="font-bold">портфолио</p>
            </div>
          </div>
        </div>

        <div className="flex gap-20 flex-col px-6 py-[112px] md:px-16 md:py-36 lg:py-40 lg:flex-row">
          <div className="flex gap-6">
            <p
              className="font-bold text-[32px] text-end border-r"
              style={{ writingMode: "sideways-lr" }}
            >
              дизайн
            </p>
            <div className="flex justify-end flex-col pt-12 gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-base">концепция</p>
                <p className="text-xs">
                  основополагающая идея и смысловой «каркас» проекта
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base">планировочное решение</p>
                <p className="text-xs">план организации пространства</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base">визуализации</p>
                <p className="text-xs">
                  фотореалистичные изображения будущего интерьера
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base">комплект чертежей</p>
                <p className="text-xs">техническая документация объекта </p>
              </div>
            </div>
          </div>

          <div className="flex gap-16 flex-col">
            <div>
              <p className="border-b pb-6 mb-6 font-bold text-2xl">
                авторский надзор и комплектация
              </p>
              <p className="text-xs">
                Услуги по сопровождению реализации дизайн-проекта,
                обеспечивающие соответствие ремонта чертежам и своевременную
                поставку материалов, мебели.
              </p>
            </div>
            <div>
              <p className="border-b pb-6 mb-6 font-bold text-2xl">
                консультации
              </p>
              <p className="text-xs">
                Разбор вопросов клиента: рекомендации по планировочным,
                стилистическим и цветовым решениям, выбору материалов и
                поставщиков.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
