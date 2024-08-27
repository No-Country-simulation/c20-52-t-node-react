import { Medic } from '../entities/medic.entity';

export const FETCH_MEDIC_USE_CASE = 'FETCH_MEDIC_USE_CASE';

export interface FetchMedicUseCase {
  execute(filter: any): Promise<Medic[]>;
}
