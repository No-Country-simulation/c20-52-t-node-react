import { Appointment, MedicalRecord, Role, Status } from '@prisma/client';

export class CreateDoctorDto {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
  role: Role;
  speciality: string;
  license: string;
  phone: string;
  status: Status;
}
