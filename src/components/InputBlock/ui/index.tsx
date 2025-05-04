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
import { useCreateReplyMutation } from '../../../features/Replies/api';
import { useCreateCommentMutation } from '../../../features/Comments/api';
import { api } from '../../../shared/api';
import { COMMENTS, REPLIES } from '../../../shared/constants/tags';

export const InputBlock = () => {
  const user = useSelector((state: RootState) => state.user);
  const repliedComment = useSelector((state: RootState) => state.comments.repliedComment);
  const [createReply, { isLoading }] = useCreateReplyMutation();
  const [createComment, { isLoading: isLoadingCreateComment }] = useCreateCommentMutation();
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const deleteReply = () => {
    dispatch(clearRepliedComment());
  };

  const handleCreateReply = () => {
    if (repliedComment) {
      createReply({
        commentId: repliedComment.id,
        content: comment,
      });
    } else {
      createComment({
        content: comment,
      });
    }

    deleteReply();
    dispatch(api.util.invalidateTags([COMMENTS, REPLIES]));
    setComment('');
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
        <Button
          isLoading={isLoading || isLoadingCreateComment}
          variant="primary"
          buttonText="Send"
          onClick={handleCreateReply}
        />
      </div>
    </div>
  );
};
