import { useGetCommentsQuery } from '../../../features/Comments/api';
import { Loader } from '../../../shared/ui/Loader';
import { CommentCard } from '../../CommentCard/ui';
import './index.scss';
import { useEffect, useRef } from 'react';

export const CommentsBlock = () => {
  const { data: comments, isLoading } = useGetCommentsQuery();
  const commentsEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isLoading && comments) {
      scrollToBottom();
    }
  }, [comments, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="comments-block">
      <div className="comments-block__list">
        {comments?.data?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
        <div ref={commentsEndRef} />
      </div>
    </div>
  );
};
