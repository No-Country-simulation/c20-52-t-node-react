import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { MedicRepository } from '../../domain/repository/medic.repository';
import { CreateMedicDto } from '../../domain/dto/create-medic.dto';
import { Medic } from '../../domain/entities/medic.entity';

@Injectable()
export class MedicImplRepository implements MedicRepository {
  constructor(private prisma: PrismaClient) {}
  async create(createMedic: CreateMedicDto): Promise<Medic> {
    return this.prisma.medic.create({ data: createMedic });
  }
  async fetch(filter: any): Promise<Medic[]> {
    const { where, skip, limit } = filter;
    return this.prisma.medic.findMany({
      where,
      skip,
      take: limit,
    });
  }
}
