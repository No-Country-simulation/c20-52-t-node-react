import { Doctor, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { DoctorRepository } from 'src/domain/repository/doctor.repository';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';
import { UpdateDoctorDto } from 'src/domain/dto/doctor/update-doctor.dto';

@Injectable()
export class DoctorImplRepository implements DoctorRepository {
  constructor(private prisma: PrismaClient) {}
  async create(createDoctor: CreateDoctorDto): Promise<Doctor> {
    return await this.prisma.doctor.create({
      data: { ...createDoctor },
      include: {
        appointments: true,
        medicalRecords: true,
      },
    });
  }
  async fetch(filter: any): Promise<Doctor[]> {
    const { skip, limit, ...where } = filter;
    return await this.prisma.doctor.findMany({
      where,
      skip,
      take: limit,
      include: { appointments: true, medicalRecords: true },
    });
  }

  async update(
    doctorId: string,
    updateDoctor: UpdateDoctorDto,
  ): Promise<Doctor> {
    return await this.prisma.doctor.update({
      where: {
        id: doctorId,
      },
      data: {
        ...updateDoctor,
      },
    });
  }

  async delete(doctorId: string): Promise<Doctor> {
    return await this.prisma.doctor.delete({ where: { id: doctorId } });
  }
}
