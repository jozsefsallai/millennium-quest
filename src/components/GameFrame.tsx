import clsx from 'clsx';
import { useState } from 'react';

import FullScreenExpandIcon from '@/components/icons/FullScreenExpandIcon';
import FullScreenExitIcon from '@/components/icons/FullScreenExitIcon';

export interface GameFrameProps {
  frameUrl: string;
}

const GameFrame = ({ frameUrl }: GameFrameProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="game flex-1 py-20 mx-auto">
      <div
        className={clsx('iframe-wrapper flex items-center', {
          'is-fullscreen': isFullScreen,
        })}
      >
        <iframe
          src={frameUrl}
          id="game-iframe"
          className="object-cover w-full h-full"
        />

        <button
          className="fixed top-0 right-0 z-10 p-2 text-white bg-black mobile-only"
          onClick={() => setIsFullScreen(!isFullScreen)}
        >
          {isFullScreen ? <FullScreenExitIcon /> : <FullScreenExpandIcon />}
        </button>
      </div>
    </div>
  );
};

export default GameFrame;
