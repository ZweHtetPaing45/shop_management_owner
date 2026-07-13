import { MySQLShopRepository } from "../../infrastructure/repositories/mysql/shop/shop.repository";
import { CreateShopUseCase } from "../../application/usecase/shop/create-shop.use-case";
import { ShopController } from "../../interface/http/v1/controller/shop/shop.controller";


const shopRepo = new MySQLShopRepository();

const createShopUC = new CreateShopUseCase(shopRepo);

export const shopContainer = new ShopController(createShopUC);

