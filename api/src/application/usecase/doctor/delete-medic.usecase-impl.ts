import { Inject, Injectable } from '@nestjs/common';
import { DOCTOR_REPOSITORY } from '../../../domain/repository/doctor.repository';
import { Doctor } from '@prisma/client';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';
import { DeleteDoctorUseCase } from 'src/domain/usecase/doctor/delete-medic.usecase';

@Injectable()
export class DeleteDoctorUseCaseImpl implements DeleteDoctorUseCase {
  constructor(
    @Inject(DOCTOR_REPOSITORY) private DoctorRepository: DoctorImplRepository,
  ) {}
  execute(doctorId: string): Promise<Doctor> {
    return this.DoctorRepository.delete(doctorId);
  }
}
