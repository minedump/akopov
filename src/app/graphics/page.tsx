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
        <div className="h-screen flex justify-center items-center p-6 bg-green-400">
          <div className="px-16 py-10 md:px-20 text-center bg-white">
            <p className="mb-12">
              Создаем дизайн продуктов,
              <br /> которые живут долго и счастливо.
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
            <div className="flex justify-end flex-col gap-3">
              <p>айдентика и визуальные системы</p>
              <p>дизайн упаковки</p>
              <p>дизайн полиграфии и POSM</p>
              <p>разработка брендбуков и гайдлайнов</p>
              <p>веб- и digital-дизайн</p>
              <p>дизайн презентаций</p>
            </div>
          </div>

          <div className="flex gap-6">
            <p
              className="font-bold text-[32px] text-end border-r"
              style={{ writingMode: "sideways-lr" }}
            >
              креатив
            </p>
            <div className="flex justify-end flex-col gap-3">
              <p>коммуникационная стратегия</p>
              <p>контент-стратегия и контент-план</p>
              <p>креативные идеи для маркетинга и кампаний</p>
              <p>креативное сопровождение бренда</p>
            </div>
          </div>

          <div className="flex gap-16 flex-col">
            <div>
              <p className="border-b pb-6 mb-6 font-bold text-2xl">
                авторский надзор
              </p>
              <p className="text-xs">
                Поддержание и развитие айдентики. Создаём новые материалы на
                основе разработанной айдентики, контролируем корректное
                применение решений, осуществляем авторский надзор за
                реализацией.
              </p>
            </div>
            <div>
              <p className="border-b pb-6 mb-6 font-bold text-2xl">
                креативные сессии
              </p>
              <p className="text-xs">
                Поддержание и развитие айдентики. Создаём новые материалы на
                основе разработанной айдентики, контролируем корректное
                применение решений, осуществляем авторский надзор за
                реализацией.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-16 md:p-16">
          <p className="font-bold text-2xl">этапы работы:</p>
          <div className="w-fit">
            <div className="mt-12 md:flex gap-20 lg:gap-[112px] mb-12">
              {stepsGroups.map((steps, index) => (
                <div key={index}>
                  {steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-baseline gap-4">
                      <p>{String(stepIndex + 1).padStart(2, "0")}</p>
                      <p className="w-10 flex-1 border-b-2 border-dashed" />
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-right">срок исполнения: от 60 дней</p>
          </div>
        </div>
      </div>
    </>
  );
}
