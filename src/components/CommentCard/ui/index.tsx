import { Comment } from '../../../features/Comments/model';
import { Avatar } from '../../../shared/ui/Avatar';
import { Button } from '../../../shared/ui/Button';
import { formatDate } from '../../../shared/utils/formatDate';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../shared/store';
import { Reply } from 'lucide-react';
import { setRepliedComment } from '../../../features/Comments/model/slice';

export interface CommentCardProps {
  comment: Comment;
}
export const CommentCard = ({ comment }: CommentCardProps) => {
  const user = useSelector((state: RootState) => state.user);
  const isOwner = user.user?.username === comment.user;
  const dispatch = useDispatch();

  const handleReply = () => {
    dispatch(setRepliedComment(comment));
  };

  return (
    <div className="comment-card-wrapper">
      <div className="comment-card">
        <div className="comment-card__header">
          <div className="comment-card__header-info">
            <Avatar name={comment.user ?? ''} size="card" />
            <h2>{comment.user}</h2>
            <p>{formatDate(comment.createdAt)}</p>
          </div>
          <div className="comment-card__header-actions">
            {isOwner ? (
              <>
                <Button buttonText="Edit" onClick={() => {}} />
                <Button buttonText="Delete" onClick={() => {}} />
              </>
            ) : (
              <div className="comment-card__header-actions-reply" onClick={handleReply}>
                <Reply />
                <p>Reply</p>
              </div>
            )}
          </div>
        </div>
        <div className="comment-card__body">
          <p>
            {comment.replyingTo && (
              <p className="comment-card__body-replying-to">
                Replying to
                <span className="comment-card__body-replying-to-username">
                  {comment.replyingTo}
                </span>
              </p>
            )}
            {comment.content}
          </p>
        </div>
      </div>
      <div className="comment-card__replies">
        {comment.replies?.map((reply) => <CommentCard key={reply.id} comment={reply} />)}
      </div>
    </div>
  );
};
