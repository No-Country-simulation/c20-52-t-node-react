import { Inject, Injectable } from '@nestjs/common';
import { DOCTOR_REPOSITORY } from '../../../domain/repository/doctor.repository';
import { Doctor } from '@prisma/client';
import { CreateDoctorUseCase } from 'src/domain/usecase/doctor/create-doctor.usecase';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';

@Injectable()
export class CreateDoctorUseCaseImpl implements CreateDoctorUseCase {
  constructor(
    @Inject(DOCTOR_REPOSITORY) private DoctorRepository: DoctorImplRepository,
  ) {}
  execute(createDoctor: CreateDoctorDto): Promise<Doctor> {
    return this.DoctorRepository.create(createDoctor);
  }
}
