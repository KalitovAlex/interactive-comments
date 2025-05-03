export interface Toast {
  id: number;
  message: string;
}

export type ToastContextType = {
  openToast: (message: string) => void;
  closeToast: (id: number) => void;
};
