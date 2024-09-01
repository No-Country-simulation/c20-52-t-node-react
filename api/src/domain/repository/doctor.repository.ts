import { Doctor } from '@prisma/client';
import { CreateDoctorDto } from '../dto/doctor/create-doctor.dto';

export const DOCTOR_REPOSITORY = 'DOCTOR_REPOSITORY';
export interface DoctorRepository {
  create(createDoctor: CreateDoctorDto): Promise<Doctor>;
  fetch(filter: any): Promise<Doctor[]>;
}
