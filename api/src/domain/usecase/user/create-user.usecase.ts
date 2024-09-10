import { User } from '@prisma/client';
import { CreateUserDto } from 'src/domain/dto/user/create-user.dto';

export const CREATE_USER_USE_CASE = 'CREATE_USER_USE_CASE';

export interface CreateUserUseCase {
  execute(createUser: CreateUserDto): Promise<User>;
}
