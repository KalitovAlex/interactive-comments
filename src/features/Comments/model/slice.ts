import { createSlice } from '@reduxjs/toolkit';
import { Comment } from '.';

interface CommentsState {
  repliedComment: Comment | null;
}

const initialState: CommentsState = {
  repliedComment: null,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setRepliedComment: (state, action) => {
      state.repliedComment = action.payload;
    },
    clearRepliedComment: (state) => {
      state.repliedComment = null;
    },
  },
});

export const { setRepliedComment, clearRepliedComment } = commentsSlice.actions;

export default commentsSlice.reducer;
