import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REPLIES, COMMENTS } from '../constants/tags';
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders(headers) {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [COMMENTS, REPLIES],
});
