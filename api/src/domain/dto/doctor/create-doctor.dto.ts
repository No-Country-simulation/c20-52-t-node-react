import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'Jhon',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  firstName: string;

  @ApiProperty({
    example: 'Smith',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  lastName: string;

  @ApiProperty({
    example: 40,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({
    example: 'example@domain.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    example: '1234578910',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: '1990-05-10',
    required: true,
  })
  @IsNotEmpty()
  @IsDate()
  @IsISO8601()
  birthday: Date;

  @ApiProperty({ example: 'Male', required: true })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({ example: 'normal', required: true })
  @IsNotEmpty()
  @IsString()
  role: Role = 'normal';

  @ApiProperty({
    example: 'oftamologo',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  speciality: string;

  @ApiProperty({
    example: 'BS231SH',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  license: string;

  @ApiProperty({
    example: '+584261587489',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'active',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  status?: Status = 'active';
}
