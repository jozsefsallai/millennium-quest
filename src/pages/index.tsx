import Footer from '@/components/Footer';
import GameFrame from '@/components/GameFrame';
import LeftIcons from '@/components/LeftIcons';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta';
import ogImage from '~assets/images/open-graph.png';
import { useRouter } from 'next/router';

const ORIGINAL_LINK =
  'https://s3-us-west-1.amazonaws.com/nimblebunworks-data/millennium-quest/original/index.html';
const EN_LINK =
  'https://s3-us-west-1.amazonaws.com/nimblebunworks-data/millennium-quest/original/index.html';

export default function Home() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);

  const [frameUrl, setFrameUrl] = useState(ORIGINAL_LINK);

  const onHelpClick = () => {
    setIsHelpOpen(true);
  };

  const onReadmeClick = () => {
    setIsReadmeOpen(true);
  };

  const onModalClosed = () => {
    setIsHelpOpen(false);
    setIsReadmeOpen(false);
  };

  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    switch (router.locale) {
      case 'en':
        setFrameUrl(EN_LINK);
        break;
      case 'jp':
        setFrameUrl(ORIGINAL_LINK);
        break;
    }
  }, [router.locale]);

  return (
    <>
      <Meta
        noAppendSiteName
        title={t('title').toString()}
        description={t('description').toString()}
        url="/"
        imageUrl={ogImage.src}
      />

      <div className="app">
        <div className="frame-container flex items-center">
          <LeftIcons onHelpClick={onHelpClick} onReadmeClick={onReadmeClick} />
          <GameFrame frameUrl={frameUrl} />
          <div className="flex-edges" />
        </div>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
