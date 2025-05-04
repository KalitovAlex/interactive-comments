import { api } from '../../../shared/api';

export const contentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateContent: builder.mutation<void, { contentId: number; content: string }>({
      query: ({ contentId, content }) => ({
        url: `/comments/content/${contentId}`,
        method: 'PATCH',
        body: { content },
      }),
    }),
    deleteContent: builder.mutation<void, { contentId: number }>({
      query: ({ contentId }) => ({
        url: `/comments/content/${contentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useUpdateContentMutation, useDeleteContentMutation } = contentApi;
