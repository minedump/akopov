import { Metadata } from "@/components/seo/Metadata";
import { OpenGraph } from "@/components/seo/OpenGraph";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import Booklet from "@/components/Booklet";

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
        <div className="h-screen flex justify-center items-center p-6 bg-blue-400">
          <div className="px-16 py-10 md:px-20 text-center bg-white">
            <p className="mb-12">
              Это не квадратные метры, а энергия <br /> бренда. Мы превращаем её
              в пространство, <br /> которое само ведёт клиента к покупке.
            </p>

            <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-20">
              <p className="font-bold">услуги</p>
              <p className="font-bold">портфолио</p>
            </div>
          </div>
        </div>

        <div className="bg-noise">
          <Booklet
            mobileImages={[
              "/images/retail-cases/ret_m_1.png",
              "/images/retail-cases/ret_m_2.png",
              "/images/retail-cases/ret_m_3.png",
            ]}
            desktopImages={[
              "/images/retail-cases/ret_desk_1.png",
              "/images/retail-cases/ret_desk_2.png",
              "/images/retail-cases/ret_desk_3.png",
            ]}
          />
        </div>
      </div>
    </>
  );
}
