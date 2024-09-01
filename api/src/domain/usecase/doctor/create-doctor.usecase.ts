import { Doctor } from '@prisma/client';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';

export const CREATE_DOCTOR_USE_CASE = 'CREATE_DOCTOR_USE_CASE';

export interface CreateDoctorUseCase {
  execute(createDoctor: CreateDoctorDto): Promise<Doctor>;
}
