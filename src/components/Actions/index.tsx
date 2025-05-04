import { Pencil, Trash } from 'lucide-react';
import { ActionsItem } from './ActionsItem';
import './index.scss';

interface ActionsProps {
  onDelete: () => void;
  onEdit: () => void;
}

export const Actions = ({ onDelete, onEdit }: ActionsProps) => {
  return (
    <div className="actions">
      <ActionsItem
        text="Delete"
        icon={<Trash style={{ color: 'var(--color-pink-400)' }} />}
        onClick={onDelete}
        color="red"
      />
      <ActionsItem
        text="Edit"
        icon={<Pencil style={{ color: 'var(--color-purple-600)' }} />}
        onClick={onEdit}
        color="purple"
      />
    </div>
  );
};
