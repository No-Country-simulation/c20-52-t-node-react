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
import { CreateMedicDto } from '../../domain/dto/create-medic.dto';
import {
  CREATE_MEDIC_USE_CASE,
  CreateMedicUseCase,
} from '../../domain/usecase/create-medic.usecase';
import {
  FETCH_MEDIC_USE_CASE,
  FetchMedicUseCase,
} from '../../domain/usecase/fetch-medic.usecase';

@Controller('medic')
export class MedicController {
  constructor(
    @Inject(CREATE_MEDIC_USE_CASE)
    private readonly createMedic: CreateMedicUseCase,
    @Inject(FETCH_MEDIC_USE_CASE)
    private readonly fetchMedic: FetchMedicUseCase,
  ) {}

  @Post()
  async create(@Body() createMedicDto: CreateMedicDto) {
    return await this.createMedic.execute(createMedicDto);
  }

  @Get()
  async fetch(@Query() filter: any) {
    return await this.fetchMedic.execute(filter);
  }
}
