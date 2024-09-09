import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Doctors
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

// Users
import { USER_REPOSITORY } from '../domain/repository/user.repository';
import { CREATE_USER_USE_CASE } from 'src/domain/usecase/user/create-user.usecase';
import { FETCH_USER_USE_CASE } from 'src/domain/usecase/user/fetch-user.usecase';
import { FetchUserUseCaseImpl } from './usecase/user/fetch-user.usecase-impl';
import { CreateUserUseCaseImpl } from './usecase/user/create-user.usecase-impl';
import { UserImplRepository } from 'src/infrastructure/repository/user-impl.repository';
import { UPDATE_USER_USE_CASE } from 'src/domain/usecase/user/update-user.usecase';
import { UpdateUserUseCaseImpl } from './usecase/user/update-user.usecase-impl';
import { DELETE_USER_USE_CASE } from 'src/domain/usecase/user/delete-user.usecase';
import { DeleteUserUseCaseImpl } from './usecase/user/delete-user.usecase-impl';

@Module({
  imports: [],
  providers: [
    // Prisma Client
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    // Doctor Providers
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
    // User Providers
    {
      provide: USER_REPOSITORY,
      useClass: UserImplRepository,
    },
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserUseCaseImpl,
    },
    {
      provide: FETCH_USER_USE_CASE,
      useClass: FetchUserUseCaseImpl,
    },
    {
      provide: UPDATE_USER_USE_CASE,
      useClass: UpdateUserUseCaseImpl,
    },
    {
      provide: DELETE_USER_USE_CASE,
      useClass: DeleteUserUseCaseImpl,
    },
  ],
  exports: [
    // Doctor Exports
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
    // User Exports
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserUseCaseImpl,
    },
    {
      provide: FETCH_USER_USE_CASE,
      useClass: FetchUserUseCaseImpl,
    },
    {
      provide: UPDATE_USER_USE_CASE,
      useClass: UpdateUserUseCaseImpl,
    },
    {
      provide: DELETE_USER_USE_CASE,
      useClass: DeleteUserUseCaseImpl,
    },
  ],
})
export class ApplicationModule {}
