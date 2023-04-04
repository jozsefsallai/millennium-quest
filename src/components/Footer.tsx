import Image from 'next/image';

import yostarLogo from '~assets/images/yostar-bottom.png';

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
    </footer>
  );
};

export default Footer;
