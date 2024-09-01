import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DOCTOR_REPOSITORY } from '../domain/repository/doctor.repository';
import { CREATE_DOCTOR_USE_CASE } from 'src/domain/usecase/doctor/create-doctor.usecase';
import { FETCH_DOCTOR_USE_CASE } from 'src/domain/usecase/doctor/fetch-medic.usecase';
import { FetchDoctorUseCaseImpl } from './usecase/doctor/fetch-medic.usecase-impl';
import { CreateDoctorUseCaseImpl } from './usecase/doctor/create-medic.usecase-impl';
import { DoctorImplRepository } from 'src/infrastructure/repository/doctor-impl.repository';
import { UPDATE_DOCTOR_USE_CASE } from 'src/domain/usecase/doctor/update-medic.usecase';
import { UpdateDoctorUseCaseImpl } from './usecase/doctor/update-medic.usecase-impl';
import { DELETE_DOCTOR_USE_CASE } from 'src/domain/usecase/doctor/delete-medic.usecase';
import { DeleteDoctorUseCaseImpl } from './usecase/doctor/delete-medic.usecase-impl';
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
    {
      provide: UPDATE_DOCTOR_USE_CASE,
      useClass: UpdateDoctorUseCaseImpl,
    },
    {
      provide: DELETE_DOCTOR_USE_CASE,
      useClass: DeleteDoctorUseCaseImpl,
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
    {
      provide: UPDATE_DOCTOR_USE_CASE,
      useClass: UpdateDoctorUseCaseImpl,
    },
    {
      provide: DELETE_DOCTOR_USE_CASE,
      useClass: DeleteDoctorUseCaseImpl,
    },
  ],
})
export class ApplicationModule {}
