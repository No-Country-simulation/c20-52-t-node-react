import { Inject, Injectable } from '@nestjs/common';
import { Doctor } from '@prisma/client';
import { DOCTOR_REPOSITORY } from 'src/domain/repository/doctor.repository';
import { FetchDoctorUseCase } from 'src/domain/usecase/doctor/fetch-medic.usecase';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';

@Injectable()
export class FetchDoctorUseCaseImpl implements FetchDoctorUseCase {
  constructor(
    @Inject(DOCTOR_REPOSITORY) private DoctorRepository: DoctorImplRepository,
  ) {}
  execute(filter: any): Promise<Doctor[]> {
    return this.DoctorRepository.fetch(filter);
  }
}
