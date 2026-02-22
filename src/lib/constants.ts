export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Мой Сайт',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  title: 'Мой Сайт - Лучшие решения для вас',
  description: 'Профессиональные услуги и решения для вашего бизнеса',
  keywords: '',
  author: 'Ваше Имя',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@yourhandle',
  themeColor: '#3b82f6',
  language: 'ru',
  yandexMetrikaId: process.env.NEXT_PUBLIC_YM_COUNTER_ID,
} as const;

export const NAVIGATION = [
  { name: 'Главная', href: '/' },
  { name: 'Портфолио', href: '/portfolio' },
] as const;