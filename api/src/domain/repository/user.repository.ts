import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';

export const USER_REPOSITORY = 'USER_REPOSITORY';
export interface UserRepository {
  create(createUser: CreateUserDto): Promise<User>;
  fetch(filter: any): Promise<User[]>;
  find(filter: any): Promise<User>;
  update(userId: string, updateUser: UpdateUserDto): Promise<User>;
  delete(userId: string): Promise<User>;
}
