import { Doctor } from '@prisma/client';
import { UpdateDoctorDto } from 'src/domain/dto/doctor/update-doctor.dto';

export const DELETE_DOCTOR_USE_CASE = 'DELETE_DOCTOR_USE_CASE';

export interface DeleteDoctorUseCase {
  execute(doctorId: string): Promise<Doctor>;
}
