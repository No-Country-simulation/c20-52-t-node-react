import { Inject, Injectable } from '@nestjs/common';
import { DOCTOR_REPOSITORY } from '../../../domain/repository/doctor.repository';
import { Doctor } from '@prisma/client';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';
import { UpdateDoctorUseCase } from 'src/domain/usecase/doctor/update-medic.usecase';
import { UpdateDoctorDto } from 'src/domain/dto/doctor/update-doctor.dto';

@Injectable()
export class UpdateDoctorUseCaseImpl implements UpdateDoctorUseCase {
  constructor(
    @Inject(DOCTOR_REPOSITORY) private DoctorRepository: DoctorImplRepository,
  ) {}
  execute(doctorId: string, updateDoctor: UpdateDoctorDto): Promise<Doctor> {
    return this.DoctorRepository.update(doctorId, updateDoctor);
  }
}
