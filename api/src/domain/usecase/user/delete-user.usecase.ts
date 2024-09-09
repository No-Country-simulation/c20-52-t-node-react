import { User } from '@prisma/client';
import { UpdateUserDto } from 'src/domain/dto/user/update-user.dto';

export const DELETE_USER_USE_CASE = 'DELETE_USER_USE_CASE';

export interface DeleteUserUseCase {
  execute(userId: string): Promise<User>;
}
