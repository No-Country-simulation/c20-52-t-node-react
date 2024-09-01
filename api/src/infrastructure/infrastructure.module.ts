import { Module } from '@nestjs/common';
import { DoctorController } from './controller/doctor.controller';
import { ApplicationModule } from '../application/application.module';
@Module({
  imports: [ApplicationModule],
  controllers: [DoctorController],
  providers: [],
  exports: [],
})
export class InfrastructureModule {}
