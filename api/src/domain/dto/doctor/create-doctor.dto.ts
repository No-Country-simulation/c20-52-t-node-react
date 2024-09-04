import { Appointment, MedicalRecord, Role, Status } from '@prisma/client';
import {
  IsDate,
  IsEmail,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  firstName: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  lastName: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsISO8601()
  birthday: Date;
  @IsNotEmpty()
  @IsString()
  gender: string;
  @IsNotEmpty()
  @IsString()
  role: Role = 'normal';
  @IsNotEmpty()
  @IsString()
  speciality: string;
  @IsNotEmpty()
  @IsString()
  license: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNotEmpty()
  @IsString()
  status?: Status = 'active';
}
