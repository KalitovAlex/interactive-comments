import './index.scss';

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange, label }: InputProps) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={label}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
