import {MySQLProductionVariantRepository} from "../../infrastructure/repositories/mysql/productions/variant.repository";
import {CreateProductionVariantUseCase} from "../../application/usecase/production/create-variant.use-case";
import { JwtTokenService } from "../../infrastructure/security/jwt-token-service";
import { ProductionVariantController } from "../../interface/http/v1/controller/productions/production.controller";
import { MySQLOwnerRepositories } from "../../infrastructure/repositories/mysql/owner/owner.repository";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";



const variantRepo = new MySQLProductionVariantRepository();

const ownerRepo = new MySQLOwnerRepositories();

const jwtTokenService = new JwtTokenService();

const createProductionVariantUseCase = new CreateProductionVariantUseCase(variantRepo);

export const productionVariantContainer = new ProductionVariantController(createProductionVariantUseCase);

export const authMiddleWare = new AuthMiddleware(jwtTokenService, ownerRepo);