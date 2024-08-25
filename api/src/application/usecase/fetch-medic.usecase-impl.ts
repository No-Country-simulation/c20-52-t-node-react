
import {Inject, Injectable} from "@nestjs/common";
import {CreateMedicUseCase} from "../../domain/usecase/create-medic.usecase";
import {CreateMedicDto} from "../../domain/dto/create-medic.dto";
import {Medic} from "../../domain/entities/medic.entity";
import {MedicImplRepository} from "../../infrastructure/repository/medic-impl.repository";
import {MEDIC_REPOSITORY} from "../../domain/repository/medic.repository";
import {FetchMedicUseCase} from "../../domain/usecase/fetch-medic.usecase";

@Injectable()
export class FetchMedicUseCaseImpl implements FetchMedicUseCase {
    constructor(
        @Inject(MEDIC_REPOSITORY) private medicRepository: MedicImplRepository
    ) {
    }
    execute(filter: any): Promise<Medic[]> {
        return this.medicRepository.fetch(filter)
    }
}