import {ProductionIngredient} from "../../../../domain/entities/production/production-ingredient.entity";
import {CreateProductionIngredientDTO} from "../../dtos/production/create-production-ingredient.dto";

export interface ProductionIngredientRepository{
    create(data : CreateProductionIngredientDTO) : Promise<ProductionIngredient>;
}