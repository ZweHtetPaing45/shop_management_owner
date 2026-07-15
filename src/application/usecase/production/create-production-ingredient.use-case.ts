import {CreateProductionIngredientDTO} from '../../interface/dtos/production/create-production-ingredient.dto';
import { ProductionIngredientRepository } from '../../interface/repositories/production/i-production-ingredient-repositories';
import { ProductionIngredient } from '../../../domain/entities/production/production-ingredient.entity';


export class CreateProductionIngredientUseCase{

    constructor(
        private productionIngredientRepository : ProductionIngredientRepository
    ){}

    async execute(data : CreateProductionIngredientDTO): Promise<ProductionIngredient>{

        const result : any = await this.productionIngredientRepository.create(data);

        return result;

    }

}