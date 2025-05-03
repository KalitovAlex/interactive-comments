import './index.scss';

export interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextArea = ({ placeholder, value, onChange }: TextAreaProps) => {
  return (
    <textarea
      className="text-area"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={3}
    />
  );
};
