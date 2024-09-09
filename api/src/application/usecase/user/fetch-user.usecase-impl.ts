import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { USER_REPOSITORY } from 'src/domain/repository/user.repository';
import { FetchUserUseCase } from 'src/domain/usecase/user/fetch-user.usecase';
import { UserImplRepository } from 'src/infrastructure/repository/user-impl.repository';

@Injectable()
export class FetchUserUseCaseImpl implements FetchUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserImplRepository,
  ) {}

  execute(filter: any): Promise<User[]> {
    return this.userRepository.fetch(filter);
  }
}
