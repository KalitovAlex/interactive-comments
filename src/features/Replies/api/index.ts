import { api } from '../../../shared/api';
import { Reply, ReplyPayload } from '../model';

export const repliesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReply: builder.mutation<Reply, ReplyPayload>({
      query: (reply) => ({
        url: '/replies',
        method: 'POST',
        body: reply,
      }),
    }),
    updateReply: builder.mutation<Reply, { replyId: number; reply: Reply }>({
      query: ({ replyId, reply }) => ({
        url: `/replies/${replyId}`,
        method: 'PATCH',
        body: reply,
      }),
    }),
    deleteReply: builder.mutation<Reply, { replyId: number }>({
      query: ({ replyId }) => ({
        url: `/replies/${replyId}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const { useCreateReplyMutation, useUpdateReplyMutation, useDeleteReplyMutation } =
  repliesApi;
