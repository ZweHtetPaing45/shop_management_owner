import {Production} from '../../../domain/entities/production/production.entity';
import {CreateProductionDTO} from '../../interface/dtos/production/create-production.dto';
import {CreateIngredientDTO} from '../../interface/dtos/production/create-ingredient.dto';
import {CreateProductionIngredientDTO} from '../../interface/dtos/production/create-production-ingredient.dto';
import {ProductionRepository} from '../../interface/repositories/production/i-production-repositories';
import {IngredientRepository} from '../../interface/repositories/production/i-ingredient-repositories';
import {ProductionIngredientRepository} from '../../interface/repositories/production/i-production-ingredient-repositories';
import { AppError } from '../../errors/app-error';


export class CreateProductionUseCase {

    constructor(
        private productionRepository: ProductionRepository
    ){}

    async execute(production: CreateProductionDTO): Promise<Production> {

        const createdProduction = await this.productionRepository.create(production);

        if(!createdProduction) throw new AppError('Failed to create production', 500);
        // for (const ingredient of ingredients){
        //     const createdIngredient = await this.ingredientRepository.create(ingredient);
        //     if(!createdIngredient)throw new AppError('Failed to create ingredient', 500);
        // }

        // for (const productionIngredient of productionIngredients){
        //     const createdProductionIngredient = await this.productionIngredientRepository.create(productionIngredient);
        //     if(!createdProductionIngredient)throw new AppError('Failed to create production ingredient', 500);
        // }
        return createdProduction;

    }

}
