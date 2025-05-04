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
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } = commentsApi;
