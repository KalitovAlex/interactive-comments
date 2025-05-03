import { Response } from '../../../shared/types/api';

export interface Comment {
  readonly id: number;
  content: string;
  readonly createdAt: string;
  updatedAt: string;
  score?: number;
  user?: string;
  replies?: Comment[];
}

export type CommentsResponse = Response<Comment[]>;

export interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
}
