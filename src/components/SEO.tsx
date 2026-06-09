import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://bassammalik.com';
const SITE_NAME = 'Bassam Malik';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
};

export default function SEO({
  title = 'Bassam Malik | Trading Education & Market Analysis',
  description = 'Bassam Malik is a beginner-friendly trading education website focused on risk management, chart analysis, trading psychology, trading journals, calculators, learning resources, and responsible decision-making.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}