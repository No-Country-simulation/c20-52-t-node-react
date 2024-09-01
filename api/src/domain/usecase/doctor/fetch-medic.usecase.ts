import { Doctor } from '@prisma/client';

export const FETCH_DOCTOR_USE_CASE = 'FETCH_DOCTOR_USE_CASE';

export interface FetchDoctorUseCase {
  execute(filter: any): Promise<Doctor[]>;
}
