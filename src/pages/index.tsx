import Footer from '@/components/Footer';
import GameFrame from '@/components/GameFrame';
import LeftIcons from '@/components/LeftIcons';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta';
import ogImage from '~assets/images/open-graph.png';
import { useRouter } from 'next/router';
import { ModalType } from '@/lib/modal';
import ModalContainer from '@/components/ModalContainer';

const ORIGINAL_LINK =
  'https://s3-us-west-1.amazonaws.com/nimblebunworks-data/millennium-quest/original/index.html';
const EN_LINK =
  'https://s3-us-west-1.amazonaws.com/nimblebunworks-data/millennium-quest/original/index.html';

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const [frameUrl, setFrameUrl] = useState(ORIGINAL_LINK);

  const onHelpClick = () => {
    setActiveModal(ModalType.Help);
  };

  const onReadmeClick = () => {
    setActiveModal(ModalType.Readme);
  };

  const onModalClosed = () => {
    setActiveModal(null);
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

        <ModalContainer
          activeModal={activeModal}
          onModalClosed={onModalClosed}
        />
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
