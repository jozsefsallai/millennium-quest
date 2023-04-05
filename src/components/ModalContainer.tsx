import { ModalType } from '@/lib/modal';
import HelpModal from './modals/HelpModal';
import ReadmeModal from './modals/ReadmeModal';

export interface ModalContainerProps {
  activeModal: ModalType | null;
  onModalClosed: () => void;
}

const ModalContainer = ({
  activeModal,
  onModalClosed,
}: ModalContainerProps) => {
  return (
    <div className="modal-container">
      {activeModal !== null && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-40 cursor-pointer"
            onClick={onModalClosed}
          />

          {activeModal === ModalType.Help && (
            <HelpModal onModalClosed={onModalClosed} />
          )}
          {activeModal === ModalType.Readme && (
            <ReadmeModal onModalClosed={onModalClosed} />
          )}
        </>
      )}
    </div>
  );
};

export default ModalContainer;
