import { CreateMedicDto } from '../dto/create-medic.dto';
import { Medic } from '../entities/medic.entity';
export const MEDIC_REPOSITORY = 'MEDIC_REPOSITORY';
export interface MedicRepository {
  create(createMedic: CreateMedicDto): Promise<Medic>;
  fetch(filter: any): Promise<Medic[]>;
}
