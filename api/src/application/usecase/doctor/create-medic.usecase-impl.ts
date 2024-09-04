import { Inject, Injectable } from '@nestjs/common';
import { DOCTOR_REPOSITORY } from '../../../domain/repository/doctor.repository';
import { Doctor } from '@prisma/client';
import { CreateDoctorUseCase } from 'src/domain/usecase/doctor/create-doctor.usecase';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';
import { error } from 'console';

@Injectable()
export class CreateDoctorUseCaseImpl implements CreateDoctorUseCase {
  constructor(
    @Inject(DOCTOR_REPOSITORY) private DoctorRepository: DoctorImplRepository,
  ) {}
  async execute(createDoctor: CreateDoctorDto): Promise<Doctor> {
    const { email, phone } = createDoctor;
    const existDoctor = await this.DoctorRepository.find({ email, phone });
    if (!!existDoctor) {
      throw new Error('DOCTOR_ALREADY_EXIST');
    }
    return this.DoctorRepository.create(createDoctor);
  }
}
