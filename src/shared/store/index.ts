import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../../features/User/model';
import { api } from '../api';
import { commentsSlice } from '../../features/Comments/model/slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
    comments: commentsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
