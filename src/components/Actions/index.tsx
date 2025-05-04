import { Pencil, Trash, X } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../../shared/ui/Modal';
import { ActionsItem } from './ActionsItem';
import './index.scss';
import { Button } from '../../shared/ui/Button';

interface ActionsProps {
  onDelete: () => void;
  onEdit: () => void;
  isLoading?: boolean;
}

export const Actions = ({ onDelete, onEdit, isLoading }: ActionsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="actions">
      <ActionsItem
        text="Delete"
        icon={<Trash style={{ color: 'var(--color-pink-400)' }} />}
        onClick={() => setIsModalOpen(true)}
        color="red"
      />
      <ActionsItem
        text="Edit"
        icon={<Pencil style={{ color: 'var(--color-purple-600)' }} />}
        onClick={onEdit}
        color="purple"
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="actions__modal">
          <div className="actions__modal__header">
            <h2 className="actions__modal__title">You really want to delete this comment?</h2>
            <X className="actions__modal__close" onClick={() => setIsModalOpen(false)} />
          </div>

          <div className="actions__modal__buttons">
            <Button buttonText="Cancel" onClick={() => setIsModalOpen(false)} />
            <Button
              variant="primary"
              buttonText="Delete"
              onClick={onDelete}
              isLoading={isLoading}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
