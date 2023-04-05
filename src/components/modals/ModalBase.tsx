export interface ModalProps {
  onModalClosed: () => void;
}

export interface ModalBaseProps extends ModalProps {
  children: React.ReactNode;
}

const ModalBase = ({ onModalClosed, children }: ModalBaseProps) => {
  return (
    <div className="modal fixed z-50 border-2 border-white bg-black text-white text-[3rem] font-display">
      <div
        className="modal-close-button absolute cursor-pointer text-white bg-black border-2 rounded-md border-white hover:bg-white hover:text-black"
        onClick={onModalClosed}
      >
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>

      <div className="modal-content p-10">{children}</div>
    </div>
  );
};

export default ModalBase;
