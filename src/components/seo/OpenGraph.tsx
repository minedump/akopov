import React from 'react';
import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';

interface OpenGraphProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export const OpenGraph: React.FC<OpenGraphProps> = ({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
  type = 'website',
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.language} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Head>
  );
};