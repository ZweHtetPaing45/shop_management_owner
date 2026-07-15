import { ProductionIngredient } from "../../../../domain/entities/production/production-ingredient.entity";
import { ProductionIngredientRepository } from "../../../../application/interface/repositories/production/i-production-ingredient-repositories";
import {AppError} from "../../../../application/errors/app-error";
import {Database} from "../../../database/mysql";
import { CreateProductionIngredientDTO } from "../../../../application/interface/dtos/production/create-production-ingredient.dto";

const pool = Database.getInstance().getPool();


export class MySQLProductionIngredientRepository implements ProductionIngredientRepository{

    async create(data: CreateProductionIngredientDTO): Promise<ProductionIngredient> {
        
        const [result] : any = await pool.query('insert into owner_production_ingredient (ingredient_id,owner_production_id) values (?,?) ',[data.ingredient_id,data.owner_production_id]);

        if(!result)throw new AppError('Can not create production ingredient',400);

        return new ProductionIngredient(result.insertId,data.ingredient_id,data.owner_production_id);

    }

}