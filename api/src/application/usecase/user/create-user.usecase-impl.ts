import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../domain/repository/user.repository';
import { User } from '@prisma/client';
import { CreateUserUseCase } from 'src/domain/usecase/user/create-user.usecase';
import { CreateUserDto } from 'src/domain/dto/user/create-user.dto';
import { UserImplRepository } from 'src/infrastructure/repository/user-impl.repository';

@Injectable()
export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserImplRepository,
  ) {}

  async execute(createUser: CreateUserDto): Promise<User> {
    const { email, phone } = createUser;
    const existUser = await this.userRepository.find({ email, phone });
    if (!!existUser) {
      throw new Error('USER_ALREADY_EXIST');
    }
    return this.userRepository.create(createUser);
  }
}
