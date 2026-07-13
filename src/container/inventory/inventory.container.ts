import { MySQLInventoryRepository } from "../../infrastructure/repositories/mysql/inventory/inventory.repository";
import { CreateInventoryUseCase } from "../../application/usecase/inventory.use-case.ts/create-inventory.use-case";
import { InventoryController } from "../../interface/http/v1/controller/inventory/inventory.controller";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";
import { JwtTokenService } from "../../infrastructure/security/jwt-token-service";
import { MySQLOwnerRepositories } from "../../infrastructure/repositories/mysql/owner/owner.repository";

const inventoryRepo = new MySQLInventoryRepository();

const ownerRepo = new MySQLOwnerRepositories();

const jwtTokenService = new JwtTokenService();

const createInventoryUC = new CreateInventoryUseCase(inventoryRepo);

export const inventoryController = new InventoryController(createInventoryUC);

export const authMiddleWare = new AuthMiddleware(jwtTokenService,ownerRepo);