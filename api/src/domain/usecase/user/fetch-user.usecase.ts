import { User } from '@prisma/client';

export const FETCH_USER_USE_CASE = 'FETCH_USER_USE_CASE';

export interface FetchUserUseCase {
  execute(filter: any): Promise<User[]>;
}
