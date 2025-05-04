import { api } from '../../../shared/api';
import { REPLIES } from '../../../shared/constants/tags';
import { Reply, ReplyPayload } from '../model';

export const repliesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReply: builder.mutation<Reply, ReplyPayload>({
      query: ({ commentId, content }) => ({
        url: `/comments/${commentId}/replies`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: [REPLIES],
    }),
    updateReply: builder.mutation<Reply, { replyId: number; reply: Reply }>({
      query: ({ replyId, reply }) => ({
        url: `/replies/${replyId}`,
        method: 'PATCH',
        body: reply,
      }),
      invalidatesTags: [REPLIES],
    }),
    deleteReply: builder.mutation<Reply, { replyId: number }>({
      query: ({ replyId }) => ({
        url: `/replies/${replyId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [REPLIES],
    }),
  }),
});

export const { useCreateReplyMutation, useUpdateReplyMutation, useDeleteReplyMutation } =
  repliesApi;
