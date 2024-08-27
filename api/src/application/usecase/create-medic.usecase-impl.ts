import { Inject, Injectable } from '@nestjs/common';
import { CreateMedicUseCase } from '../../domain/usecase/create-medic.usecase';
import { CreateMedicDto } from '../../domain/dto/create-medic.dto';
import { Medic } from '../../domain/entities/medic.entity';
import { MedicImplRepository } from '../../infrastructure/repository/medic-impl.repository';
import { MEDIC_REPOSITORY } from '../../domain/repository/medic.repository';

@Injectable()
export class CreateMedicUseCaseImpl implements CreateMedicUseCase {
  constructor(
    @Inject(MEDIC_REPOSITORY) private medicRepository: MedicImplRepository,
  ) {}
  execute(createMedic: CreateMedicDto): Promise<Medic> {
    return this.medicRepository.create(createMedic);
  }
}
