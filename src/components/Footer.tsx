import Image from 'next/image';

import yostarLogo from '~assets/images/yostar-bottom.png';
import yostarCornerLogo from '~assets/images/yostar-topright.png';

const Footer = () => {
  return (
    <footer className="px-3 py-12">
      <Image
        src={yostarLogo.src}
        width={yostarLogo.width}
        height={yostarLogo.height}
        alt="NEXON Games and Yostar logos"
        className="logo-yostar mx-auto"
      />

      <Image
        src={yostarCornerLogo.src}
        width={yostarCornerLogo.width}
        height={yostarCornerLogo.height}
        alt="Yostar logo"
        className="fixed top-1 right-14 w-48 mobile-only"
      />
    </footer>
  );
};

export default Footer;
