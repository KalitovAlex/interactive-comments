import './index.scss';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="overlay" onClick={onClose} />
      <div className="modal-content">{children} </div>
    </div>
  );
};
