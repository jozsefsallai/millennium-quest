import LanguageSwitcher from './LanguageSwitcher';

export interface LeftIconsProps {
  onHelpClick?: () => void;
  onReadmeClick?: () => void;
}

const LeftIcons = ({ onHelpClick, onReadmeClick }: LeftIconsProps) => {
  return (
    <div className="left-icons flex-edges self-start flex flex-col items-center gap-8 pt-20">
      <div className="help-icon" onClick={onHelpClick} />
      <div className="readme-icon" onClick={onReadmeClick} />
      <LanguageSwitcher />
    </div>
  );
};

export default LeftIcons;
