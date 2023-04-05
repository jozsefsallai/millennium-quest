import Image from 'next/image';
import logo from '~assets/images/bluearchive-logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <a href="https://bluearchive.jp/" target="_blank" rel="noreferrer">
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt="Blue Archive"
        />
      </a>
    </div>
  );
};

export default Logo;
