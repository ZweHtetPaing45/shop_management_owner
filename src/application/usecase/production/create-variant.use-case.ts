import {ProductionVariant} from "../../../domain/entities/production/variant.entity";
import {CreateProductionVariantDto} from "../../interface/dtos/production/create-variant.dto";
import {ProductionVariantRepository} from "../../interface/repositories/production/i-variant-repositories";
import {AppError} from "../../errors/app-error";


export class CreateProductionVariantUseCase{

    constructor(
        private productionVariantRepository : ProductionVariantRepository
    ){}

    async execute(data : CreateProductionVariantDto) : Promise<ProductionVariant>{

        const result : any = await this.productionVariantRepository.create(data);

        if(!result) throw new AppError("Can not create production variant",400);

        return result;
    }

}