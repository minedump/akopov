import { Metadata } from '@/components/seo/Metadata'
import { OpenGraph } from '@/components/seo/OpenGraph'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Проект 1',
    category: 'Веб-разработка',
    image: '/images/portfolio/project1.jpg',
    description: 'Описание первого проекта',
  },
  {
    id: 2,
    title: 'Проект 2',
    category: 'Мобильные приложения',
    image: '/images/portfolio/project2.jpg',
    description: 'Описание второго проекта',
  },
  {
    id: 3,
    title: 'Проект 3',
    category: 'Дизайн',
    image: '/images/portfolio/project3.jpg',
    description: 'Описание третьего проекта',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Metadata title="Портфолио" />
      <OpenGraph title="Портфолио - Мой Сайт" />
      <SchemaMarkup 
        type="Organization" 
        data={{
          description: 'Наши выполненные проекты',
          knowsAbout: portfolioItems.map(item => item.category),
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Наше портфолио</h1>
        <p className="text-lg text-gray-600 mb-12">
          Посмотрите наши последние работы
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Изображение проекта
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-blue-600 mb-2 block">
                  {item.category}
                </span>
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}