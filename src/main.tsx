import './shared/styles/globals.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './shared/router';
import { store } from './shared/store';
import { Provider } from 'react-redux';
import { ToastProvider } from './shared/ui/Toast/ui/Toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </Provider>
  </StrictMode>
);
