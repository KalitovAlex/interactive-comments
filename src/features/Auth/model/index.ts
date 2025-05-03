import { Response } from '../../../shared/types/api';
import { User } from '../../User/model';

export interface AuthRequest {
  username: string;
}

export type AuthResponse = Response<{
  user: User;
  token: string;
}>;
