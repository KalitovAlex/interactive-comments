import './index.scss';

export const Avatar = ({ name, size = 'default' }: { name: string; size?: 'default' | 'card' }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');
  return <div className={`avatar ${size}`}>{initials}</div>;
};
