import { Loader } from '../Loader';
import './index.scss';

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  buttonText,
  onClick,
  type = 'button',
  isLoading,
  variant,
}: ButtonProps) => {
  return (
    <button className={`button ${variant}`} onClick={onClick} type={type}>
      {isLoading ? <Loader /> : buttonText}
    </button>
  );
};
