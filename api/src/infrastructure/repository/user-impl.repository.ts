import { User, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/repository/user.repository';
import { CreateUserDto } from 'src/domain/dto/user/create-user.dto';
import { UpdateUserDto } from 'src/domain/dto/user/update-user.dto';

@Injectable()
export class UserImplRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(createUser: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: { ...createUser },
      include: {
        appointments: true, // Assuming users also have appointments to include
      },
    });
  }

  async fetch(filter: any): Promise<User[]> {
    const { skip, limit, ...where } = filter;
    return await this.prisma.user.findMany({
      where,
      skip,
      take: limit,
      include: { appointments: true },
    });
  }

  async update(userId: string, updateUser: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...updateUser,
      },
    });
  }

  async delete(userId: string): Promise<User> {
    return await this.prisma.user.delete({ where: { id: userId } });
  }

  async find(filter: any): Promise<User> {
    return await this.prisma.user.findUnique({ where: { ...filter } });
  }
}
