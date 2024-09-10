import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../domain/repository/user.repository';
import { User } from '@prisma/client';
import { UserImplRepository } from 'src/infrastructure/repository/user-impl.repository';
import { UpdateUserUseCase } from 'src/domain/usecase/user/update-user.usecase';
import { UpdateUserDto } from 'src/domain/dto/user/update-user.dto';

@Injectable()
export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserImplRepository,
  ) {}

  execute(userId: string, updateUser: UpdateUserDto): Promise<User> {
    return this.userRepository.update(userId, updateUser);
  }
}
