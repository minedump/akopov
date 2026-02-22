import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © {currentYear} Все права защищены
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};