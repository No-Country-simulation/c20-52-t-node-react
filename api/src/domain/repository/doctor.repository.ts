import { Doctor } from '@prisma/client';
import { CreateDoctorDto } from '../dto/doctor/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/doctor/update-doctor.dto';

export const DOCTOR_REPOSITORY = 'DOCTOR_REPOSITORY';
export interface DoctorRepository {
  create(createDoctor: CreateDoctorDto): Promise<Doctor>;
  fetch(filter: any): Promise<Doctor[]>;
  find(filter: any): Promise<Doctor>;
  update(doctorId: string, updateDoctor: UpdateDoctorDto): Promise<Doctor>;
  delete(doctorId: string): Promise<Doctor>;
}
