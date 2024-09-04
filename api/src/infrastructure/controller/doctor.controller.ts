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
  BadRequestException,
} from '@nestjs/common';
import { CreateDoctorDto } from 'src/domain/dto/doctor/create-doctor.dto';
import { UpdateDoctorDto } from 'src/domain/dto/doctor/update-doctor.dto';
import {
  CREATE_DOCTOR_USE_CASE,
  CreateDoctorUseCase,
} from 'src/domain/usecase/doctor/create-doctor.usecase';
import {
  DELETE_DOCTOR_USE_CASE,
  DeleteDoctorUseCase,
} from 'src/domain/usecase/doctor/delete-medic.usecase';
import {
  FETCH_DOCTOR_USE_CASE,
  FetchDoctorUseCase,
} from 'src/domain/usecase/doctor/fetch-medic.usecase';
import {
  UPDATE_DOCTOR_USE_CASE,
  UpdateDoctorUseCase,
} from 'src/domain/usecase/doctor/update-medic.usecase';

@Controller('doctor')
export class DoctorController {
  constructor(
    @Inject(CREATE_DOCTOR_USE_CASE)
    private readonly createDoctor: CreateDoctorUseCase,
    @Inject(FETCH_DOCTOR_USE_CASE)
    private readonly fetchDoctor: FetchDoctorUseCase,
    @Inject(UPDATE_DOCTOR_USE_CASE)
    private readonly updateDoctorUseCase: UpdateDoctorUseCase,
    @Inject(DELETE_DOCTOR_USE_CASE)
    private readonly deleteDoctorUseCase: DeleteDoctorUseCase,
  ) {}

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    return await this.createDoctor.execute(createDoctorDto).catch((error) => {
      if (error.message == 'DOCTOR_ALREADY_EXIST') {
        throw new BadRequestException('Doctor Already Exist', error);
      }
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
    });
  }

  @Get()
  async fetch(@Query() filter: any) {
    return await this.fetchDoctor.execute(filter);
  }

  @Patch(':id')
  async update(
    @Body() updateDoctor: UpdateDoctorDto,
    @Param('id') doctorId: string,
  ) {
    return await this.updateDoctorUseCase.execute(doctorId, updateDoctor);
  }

  @Delete(':id')
  async delete(@Param('id') doctorId: string) {
    return await this.deleteDoctorUseCase.execute(doctorId);
  }
}
