import isMobile from '@/lib/isMobile';
import '@/styles/base.scss';
import { appWithTranslation } from 'next-i18next';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (isMobile()) {
      document.body.classList.add('is-mobile');
    }
  }, []);

  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
