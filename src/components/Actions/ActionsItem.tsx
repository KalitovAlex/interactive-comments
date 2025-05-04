import './ActionsItem.scss';

interface ActionsItemProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

export const ActionsItem = ({ text, icon, onClick, color }: ActionsItemProps) => {
  return (
    <div className="actions-item" onClick={onClick}>
      {icon}
      <p className={`actions-item__text ${color}`}>{text}</p>
    </div>
  );
};
