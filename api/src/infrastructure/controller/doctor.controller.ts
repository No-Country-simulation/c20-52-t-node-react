import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';
import {
  CREATE_DOCTOR_USE_CASE,
  CreateDoctorUseCase,
} from 'src/domain/usecase/doctor/create-doctor.usecase';
import {
  FETCH_DOCTOR_USE_CASE,
  FetchDoctorUseCase,
} from 'src/domain/usecase/doctor/fetch-medic.usecase';

@Controller('doctor')
export class DoctorController {
  constructor(
    @Inject(CREATE_DOCTOR_USE_CASE)
    private readonly createDoctor: CreateDoctorUseCase,
    @Inject(FETCH_DOCTOR_USE_CASE)
    private readonly fetchDoctor: FetchDoctorUseCase,
  ) {}

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    return await this.createDoctor.execute(createDoctorDto);
  }

  @Get()
  async fetch(@Query() filter: any) {
    return await this.fetchDoctor.execute(filter);
  }
}
