import buildUrl from '@/lib/buildUrl';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

export interface IMetaProps {
  title?: string;
  description?: string;
  url: string;
  imageUrl?: string;
  noAppendSiteName?: boolean;
}

const Meta = ({
  title,
  description,
  url,
  imageUrl,
  noAppendSiteName = false,
}: IMetaProps) => {
  const { t } = useTranslation();

  if (title && !noAppendSiteName) {
    title = `${t('app-name')} - ${title}`;
  }

  if (!title) {
    title = t('app-name').toString();
  }

  url = buildUrl(url);

  if (imageUrl) {
    imageUrl = buildUrl(imageUrl);
  }

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}

      <meta property="og:url" content={url} />

      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta property="twitter:title" content={title} />
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      <meta property="twitter:url" content={url} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
