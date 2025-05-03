import { useGetCommentsQuery } from '../../../features/Comments/api';
import { Loader } from '../../../shared/ui/Loader';
import { CommentCard } from '../../CommentCard/ui';
import './index.scss';

export const CommentsBlock = () => {
  const { data: comments, isLoading } = useGetCommentsQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="comments-block">
      <div className="comments-block__list">
        {comments?.data?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};
