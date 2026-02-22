import { Metadata } from '@/components/seo/Metadata'
import { OpenGraph } from '@/components/seo/OpenGraph'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

export default function HomePage() {
  return (
    <>
      <Metadata title="Главная" />
      <OpenGraph title="Главная - Мой Сайт" />
      <SchemaMarkup type="WebSite" />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Добро пожаловать на наш сайт
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Мы предлагаем профессиональные решения для вашего бизнеса
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Преимущество {item}</h3>
              <p className="text-gray-600">
                Описание преимущества нашей компании
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}