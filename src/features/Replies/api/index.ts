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
  }),
});

export const { useCreateReplyMutation } = repliesApi;
