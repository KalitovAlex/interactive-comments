import './index.scss';
interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return <div className="badge">{text}</div>;
};
