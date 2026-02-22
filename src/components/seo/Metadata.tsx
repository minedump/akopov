import React from 'react';
import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noIndex?: boolean;
}

export const Metadata: React.FC<MetadataProps> = ({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  canonical,
  noIndex = false,
}) => {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const canonicalUrl = canonical || SITE_CONFIG.url;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_CONFIG.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      <meta name="language" content={SITE_CONFIG.language} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
};