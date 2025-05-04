import { useEffect, useState } from 'react';
import './index.scss';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.classList.add('active-modal');
    } else {
      if (isAnimating) {
        const timer = setTimeout(() => {
          setIsAnimating(false);
          document.body.classList.remove('active-modal');
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, isAnimating]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`modal ${isOpen ? 'modal-show' : 'modal-hide'}`}>
      <div className="overlay" onClick={onClose} />
      <div className="modal-content">{children}</div>
    </div>
  );
};
