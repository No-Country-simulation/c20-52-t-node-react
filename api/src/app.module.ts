import { Module } from '@nestjs/common';
import {MedicController} from "./infrastructure/controller/medic.controller";
import {CREATE_MEDIC_USE_CASE} from "./domain/usecase/create-medic.usecase";
import {CreateMedicUseCaseImpl} from "./application/usecase/create-medic.usecase-impl";
import {ApplicationModule} from "./application/application.module";
import {InfrastructureModule} from "./infrastructure/infrastructure.module";

@Module({
  imports:[ApplicationModule, InfrastructureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
