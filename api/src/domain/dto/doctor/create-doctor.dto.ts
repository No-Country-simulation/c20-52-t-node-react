import { Appointment, Role, Status } from '@prisma/client';

export class CreateDoctorDto {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
  role: Role;
  medicSpeciality: string;
  license: string;
  phone: string;
  status: Status;
  appointments?: Appointment[] = [];
}
