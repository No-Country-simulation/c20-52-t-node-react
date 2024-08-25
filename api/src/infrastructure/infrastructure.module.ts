import { Module } from '@nestjs/common';
import {MedicController} from "./controller/medic.controller";
import {ApplicationModule} from "../application/application.module";
@Module({
    imports: [ApplicationModule],
    controllers: [MedicController],
    providers: [],
    exports: [],
})
export class InfrastructureModule {}