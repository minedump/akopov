import Link from 'next/link'
import { Metadata } from '@/components/seo/Metadata'

export default function NotFoundPage() {
  return (
    <>
      <Metadata 
        title="Страница не найдена" 
        description="Запрашиваемая страница не существует"
        noIndex={true}
      />
      
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-gray-600 mb-8">
            Извините, запрашиваемая страница не существует или была перемещена
          </p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </>
  )
}