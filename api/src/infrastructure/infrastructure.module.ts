import { Module } from '@nestjs/common';
import { DoctorController } from './controller/doctor.controller';
import { UserController } from './controller/user.contoller';
import { ApplicationModule } from '../application/application.module';
@Module({
  imports: [ApplicationModule],
  controllers: [DoctorController, UserController],
  providers: [],
  exports: [],
})
export class InfrastructureModule {}
