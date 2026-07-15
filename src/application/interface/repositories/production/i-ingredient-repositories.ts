import {Ingredient} from "../../../../domain/entities/production/ingredient.entity";
import { CreateIngredientDTO } from "../../dtos/production/create-ingredient.dto";


export interface IngredientRepository{
    create(data : CreateIngredientDTO): Promise<Ingredient>;
}