import ENFlag from '~assets/flags/en.svg';
import JPFlag from '~assets/flags/jp.svg';

import { useRouter } from 'next/router';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  return (
    <div className="border-2 border-black leading-[0] rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
      {router.locale === 'jp' && (
        <button onClick={() => changeLanguage('en')}>
          <Image src={ENFlag.src} alt="English" width={54} height={40} />
        </button>
      )}
      {router.locale === 'en' && (
        <button onClick={() => changeLanguage('jp')}>
          <Image src={JPFlag.src} alt="Japanese" width={54} height={40} />
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
