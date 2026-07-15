import { Ingredient } from "../../../../domain/entities/production/ingredient.entity";
import { IngredientRepository } from "../../../../application/interface/repositories/production/i-ingredient-repositories";
import { CreateIngredientDTO } from "../../../../application/interface/dtos/production/create-ingredient.dto";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";


const pool = Database.getInstance().getPool();

export class MySQLIngredientRepository implements IngredientRepository{

    async create(data: CreateIngredientDTO): Promise<Ingredient> {
        
        const [result] : any = await pool.query(`insert into ingredient(name,quantity,unit) values(?,?,?)`,[data.name,data.quantity,data.unit]);

        if(!result)throw new AppError('Can not create ingredient',400);

        return new Ingredient(result.insertId,data.name,data.quantity,data.unit);
    }

}