import { api } from '../../../shared/api';
import { COMMENTS } from '../../../shared/constants/tags';
import { Response } from '../../../shared/types/api';
import { Comment } from '../model';

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Response<Comment[]>, void>({
      query: () => '/comments',
      providesTags: [COMMENTS],
    }),
    createComment: builder.mutation<Response<Comment>, { content: string }>({
      query: ({ content }) => ({
        url: '/comments',
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: [COMMENTS],
    }),
    updateComment: builder.mutation<Comment, { commentId: number; comment: Comment }>({
      query: ({ commentId, comment }) => ({
        url: `/comments/${commentId}`,
        method: 'PATCH',
        body: comment,
      }),
    }),
    deleteComment: builder.mutation<Comment, { commentId: number }>({
      query: ({ commentId }) => ({
        url: `/comments/${commentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;
