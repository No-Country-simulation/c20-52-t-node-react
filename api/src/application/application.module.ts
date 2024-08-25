import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {CREATE_MEDIC_USE_CASE} from "../domain/usecase/create-medic.usecase";
import {CreateMedicUseCaseImpl} from "./usecase/create-medic.usecase-impl";
import {MEDIC_REPOSITORY} from "../domain/repository/medic.repository";
import {MedicImplRepository} from "../infrastructure/repository/medic-impl.repository";
import {FETCH_MEDIC_USE_CASE} from "../domain/usecase/fetch-medic.usecase";
import {FetchMedicUseCaseImpl} from "./usecase/fetch-medic.usecase-impl";
@Module({
    imports: [],
    providers: [
        {
            provide: PrismaClient,
            useValue: new PrismaClient(),
        },
        {
            provide: MEDIC_REPOSITORY,
            useClass: MedicImplRepository
        },
        {
        provide: CREATE_MEDIC_USE_CASE,
        useClass: CreateMedicUseCaseImpl
    },
        {
            provide: FETCH_MEDIC_USE_CASE,
            useClass: FetchMedicUseCaseImpl
        }],
    exports: [
        {
            provide: CREATE_MEDIC_USE_CASE,
            useClass: CreateMedicUseCaseImpl
        },
        {
            provide: FETCH_MEDIC_USE_CASE,
            useClass: FetchMedicUseCaseImpl
        }
    ],
})
export class ApplicationModule {}