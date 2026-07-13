import { Shop } from "../../../../domain/entities/shop/shop.entity";

export interface ShopRepository{

    create(data: {name: string,file: Express.Multer.File,address: string,manager_name: string,phone: string}): Promise<Shop>;

}