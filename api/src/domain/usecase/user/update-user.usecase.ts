import { User } from '@prisma/client';
import { UpdateUserDto } from 'src/domain/dto/user/update-user.dto';

export const UPDATE_USER_USE_CASE = 'UPDATE_USER_USE_CASE';

export interface UpdateUserUseCase {
  execute(userId: string, updateDoctor: UpdateUserDto): Promise<User>;
}
