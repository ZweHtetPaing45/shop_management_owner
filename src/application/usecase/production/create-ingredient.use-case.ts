import {IngredientRepository} from '../../interface/repositories/production/i-ingredient-repositories';
import {CreateIngredientDTO} from '../../interface/dtos/production/create-ingredient.dto';
import { Ingredient } from '../../../domain/entities/production/ingredient.entity';

export class CreateIngredientUseCase{

    constructor(
        private ingredientRepository : IngredientRepository
    ){}

    
    async execute(data : CreateIngredientDTO): Promise<Ingredient>{

        const result : any = await this.ingredientRepository.create(data);

        return result;

    }
}