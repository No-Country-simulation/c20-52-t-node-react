import { Doctor } from '@prisma/client';
import { UpdateDoctorDto } from 'src/domain/dto/doctor/update-doctor.dto';

export const UPDATE_DOCTOR_USE_CASE = 'UPDATE_DOCTOR_USE_CASE';

export interface UpdateDoctorUseCase {
  execute(doctorId: string, updateDoctor: UpdateDoctorDto): Promise<Doctor>;
}
