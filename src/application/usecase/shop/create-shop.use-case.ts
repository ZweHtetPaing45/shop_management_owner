import { Shop } from "../../../domain/entities/shop/shop.entity";
import { ShopRepository } from "../../interface/repositories/shop-repositories/i-shop-repositories";
import { CreateShopDto } from "../../interface/dtos/shop/create-shop.dto";
import { AppError } from "../../errors/app-error";

export class CreateShopUseCase{

    constructor(
        private shopRepository: ShopRepository
    ){}

    async execute(data: CreateShopDto): Promise<Shop>{
        
        const shop = await this.shopRepository.create(data);

        if(!shop)throw new AppError("Can not create shop",401);
        
        return new Shop(shop.id,shop.name,shop.branch_image_url,shop.branch_public_id,shop.address,shop.phone,shop.manager_name)
    }

}