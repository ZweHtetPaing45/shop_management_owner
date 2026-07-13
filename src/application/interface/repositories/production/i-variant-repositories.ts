import {ProductionVariant} from "../../../../domain/entities/production/variant.entity";
import {CreateProductionVariantDto} from "../../dtos/production/create-variant.dto";

export interface ProductionVariantRepository{

    create(data : CreateProductionVariantDto): Promise<ProductionVariant>;

}