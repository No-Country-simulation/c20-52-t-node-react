import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DOCTOR_REPOSITORY } from '../domain/repository/doctor.repository';
import { CREATE_DOCTOR_USE_CASE } from 'src/domain/usecase/doctor/create-doctor.usecase';
import { FETCH_DOCTOR_USE_CASE } from 'src/domain/usecase/doctor/fetch-medic.usecase';
import { FetchDoctorUseCaseImpl } from './usecase/doctor/fetch-medic.usecase-impl';
import { CreateDoctorUseCaseImpl } from './usecase/doctor/create-medic.usecase-impl';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';
@Module({
  imports: [],
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    {
      provide: DOCTOR_REPOSITORY,
      useClass: DoctorImplRepository,
    },
    {
      provide: CREATE_DOCTOR_USE_CASE,
      useClass: CreateDoctorUseCaseImpl,
    },
    {
      provide: FETCH_DOCTOR_USE_CASE,
      useClass: FetchDoctorUseCaseImpl,
    },
  ],
  exports: [
    {
      provide: CREATE_DOCTOR_USE_CASE,
      useClass: CreateDoctorUseCaseImpl,
    },
    {
      provide: FETCH_DOCTOR_USE_CASE,
      useClass: FetchDoctorUseCaseImpl,
    },
  ],
})
export class ApplicationModule {}
