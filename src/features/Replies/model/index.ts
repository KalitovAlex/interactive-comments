import { Response } from '../../../shared/types/api';

export interface Reply {
  readonly id: number;
  content: string;
  readonly createdAt: string;
  updatedAt: string;
  score?: number;
  replyingTo?: string;
  user?: string;
}

export type RepliesResponse = Response<Reply[]>;

export interface ReplyPayload {
  content: string;
  replyingTo: string;
}
