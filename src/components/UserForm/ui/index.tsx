/* eslint-disable react-hooks/exhaustive-deps */
import './index.scss';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { useEffect, useState } from 'react';
import { useToast } from '../../../shared/ui/Toast/ui/ToastContext';
import { useLoginMutation } from '../../../features/Auth/api';
import { useNavigate } from 'react-router';
import { DASHBOARD } from '../../../shared/router/routes';

export const UserForm = () => {
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { openToast } = useToast();

  useEffect(() => {
    if (isSuccess) {
      openToast('Login successful');
      navigate(DASHBOARD);
    }

    if (isError) {
      openToast('Login failed');
    }
  }, [isSuccess, isError, navigate]);

  return (
    <div className="user-form">
      <div className="auth-page__sidebar">
        <img src={'/auth-sidebar.svg'} alt="auth-sidebar" />
      </div>
      <div className="user-form__container">
        <div className="user-form__logo">
          <img src={'/logo.svg'} alt="logo" />
          <span className="user-form__logo__text">PlayGame</span>
        </div>
        <h1 className="user-form__title">Login</h1>
        <form className="user-form__form" action="submit">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />
          <Button
            buttonText="Login"
            onClick={() => {
              login({ username });
            }}
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};
