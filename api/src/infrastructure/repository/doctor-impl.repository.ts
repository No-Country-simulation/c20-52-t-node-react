import { Doctor, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { DoctorRepository } from 'src/domain/repository/doctor.repository';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';

@Injectable()
export class DoctorImplRepository implements DoctorRepository {
  constructor(private prisma: PrismaClient) {}
  async create(createDoctor: CreateDoctorDto): Promise<Doctor> {
    return await this.prisma.doctor.create({
      data: createDoctor,
      include: {
        Appointments: true,
      },
    });
  }
  async fetch(filter: any): Promise<Doctor[]> {
    const { where, skip, limit } = filter;
    return await this.prisma.doctor.findMany({
      where,
      skip,
      take: limit,
      include: { Appointments: true },
    });
  }
}
