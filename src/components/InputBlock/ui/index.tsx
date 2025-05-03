import { useSelector } from 'react-redux';
import { Avatar } from '../../../shared/ui/Avatar';
import './index.scss';
import { RootState } from '../../../shared/store';
import { TextArea } from '../../../shared/ui/TextArea';
import { useState } from 'react';
import { Button } from '../../../shared/ui/Button';

export const InputBlock = () => {
  const user = useSelector((state: RootState) => state.user);
  const [comment, setComment] = useState('');

  return (
    <div className="input-block">
      <Avatar name={user.user?.username ?? 'John Doe'} />
      <TextArea
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="primary" buttonText="Send" onClick={() => {}} />
    </div>
  );
};
