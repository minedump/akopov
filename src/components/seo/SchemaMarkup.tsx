import React from 'react';
import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';

interface SchemaMarkupProps {
  type?: 'Organization' | 'WebSite' | 'Person';
  data?: Record<string, any>;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type = 'WebSite',
  data = {},
}) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    ...data,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const schema = type === 'WebSite' ? websiteSchema : baseSchema;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};