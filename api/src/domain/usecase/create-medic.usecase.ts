import { CreateMedicDto } from '../dto/create-medic.dto';
import { Medic } from '../entities/medic.entity';

export const CREATE_MEDIC_USE_CASE = 'CREATE_MEDIC_USE_CASE';

export interface CreateMedicUseCase {
  execute(createMedic: CreateMedicDto): Promise<Medic>;
}
