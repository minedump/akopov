import React from 'react';
import Link from 'next/link';
import { NAVIGATION } from '@/lib/constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Логотип
          </Link>
          
          <ul className="flex space-x-6">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};