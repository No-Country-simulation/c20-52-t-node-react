import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../domain/repository/user.repository';
import { User } from '@prisma/client';
import { UserImplRepository } from 'src/infrastructure/repository/user-impl.repository';
import { DeleteUserUseCase } from 'src/domain/usecase/user/delete-user.usecase';

@Injectable()
export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserImplRepository,
  ) {}

  execute(userId: string): Promise<User> {
    return this.userRepository.delete(userId);
  }
}
