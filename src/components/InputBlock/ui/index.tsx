import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '../../../shared/ui/Avatar';
import './index.scss';
import { RootState } from '../../../shared/store';
import { TextArea } from '../../../shared/ui/TextArea';
import { useState } from 'react';
import { Button } from '../../../shared/ui/Button';
import { Separator } from '../../../shared/ui/Separator';
import { X } from 'lucide-react';
import { clearRepliedComment } from '../../../features/Comments/model/slice';

export const InputBlock = () => {
  const user = useSelector((state: RootState) => state.user);
  const repliedComment = useSelector((state: RootState) => state.comments.repliedComment);
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const deleteReply = () => {
    dispatch(clearRepliedComment());
  };

  return (
    <div className="input-block--wrapper">
      {repliedComment && (
        <div className="input-block__replied-comment">
          <p className="input-block__replied-comment__user">Replying to {repliedComment.user}</p>
          <p className="input-block__replied-comment__content">{repliedComment.content}</p>
          <div className="input-block__replied-comment__close" onClick={deleteReply}>
            <X />
          </div>
        </div>
      )}
      <Separator />
      <div className="input-block">
        <Avatar name={user.user?.username ?? 'John Doe'} />
        <TextArea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button variant="primary" buttonText="Send" onClick={() => {}} />
      </div>
    </div>
  );
};
