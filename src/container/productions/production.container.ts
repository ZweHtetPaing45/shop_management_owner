import { MySQLIngredientRepository } from "../../infrastructure/repositories/mysql/productions/ingredient.repository";
import { MySQLProductionIngredientRepository } from "../../infrastructure/repositories/mysql/productions/production-ingredient.repository";
import { MySQLProductionRepository } from "../../infrastructure/repositories/mysql/productions/production.repository";
import { ProductionController } from "../../interface/http/v1/controller/productions/production.controller";
import { CreateProductionUseCase } from "../../application/usecase/production/create-production.use-case";
import { CreateProductionIngredientUseCase } from "../../application/usecase/production/create-production-ingredient.use-case";
import { CreateIngredientUseCase } from "../../application/usecase/production/create-ingredient.use-case";


const ingredientRepo = new MySQLIngredientRepository();
const proIngRepo = new MySQLProductionIngredientRepository();
const productionRepo = new MySQLProductionRepository();


const createProductionUC = new CreateProductionUseCase(productionRepo);

const createIngredientUC = new CreateIngredientUseCase(ingredientRepo);

const createProductionIngUC = new CreateProductionIngredientUseCase(proIngRepo);

export const ProductionContainer = new ProductionController(createProductionUC,createIngredientUC,createProductionIngUC);