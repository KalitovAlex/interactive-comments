import { api } from '../../../shared/api';
import { AuthRequest, AuthResponse } from '../model';
import { setUser, User } from '../../User/model';
import { Response } from '../../../shared/types/api';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({ url: 'auth/login', method: 'POST', body: data }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('token', data.data.token);
          dispatch(setUser(data.data.user));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    me: builder.query<Response<User>, void>({ query: () => '/auth/me' }),
  }),
});

export const { useLoginMutation, useMeQuery } = authApi;
