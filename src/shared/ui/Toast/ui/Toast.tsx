import { useState, useEffect } from 'react';
import './Toast.scss';
import { ToastContext, useToast } from './ToastContext';
import { Toast as ToastType } from '../model';

export const Toast = ({ message, id }: ToastType) => {
  const { closeToast } = useToast();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeToast(id);
    }, 500);
  };

  return (
    <div className={`toast ${closing ? 'toast--closing' : ''}`} key={id}>
      {message}
      <button className="toast__close" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const openToast = (message: string) => {
    setToasts((prev) => [...prev, { id: Date.now(), message }]);
  };

  const closeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Используем useEffect для автоматического закрытия тостов
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        const oldestToast = document.querySelector('.toast');
        if (oldestToast) {
          oldestToast.classList.add('toast--closing');

          setTimeout(() => {
            closeToast(toasts[0].id);
          }, 500);
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toasts]); // Перезапускаем таймер при изменении списка тостов

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} id={toast.id} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
