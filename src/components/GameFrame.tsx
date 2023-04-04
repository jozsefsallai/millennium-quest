export interface GameFrameProps {
  frameUrl: string;
}

const GameFrame = ({ frameUrl }: GameFrameProps) => {
  return (
    <div className="game flex-1 py-20 mx-auto">
      <div className="iframe-wrapper flex items-center">
        <iframe
          src={frameUrl}
          id="game-iframe"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default GameFrame;
