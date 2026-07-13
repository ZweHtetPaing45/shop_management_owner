import { Shop } from "../../../../domain/entities/shop/shop.entity";
import { ShopRepository } from "../../../../application/interface/repositories/shop-repositories/i-shop-repositories";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { uploadImage } from "../../../../services/image.service";
import { createLogger } from "../../../logger/create-logger";


const pool = Database.getInstance().getPool();

const logger = createLogger();

export class MySQLShopRepository implements ShopRepository{

    async create(data: { name: string; file: Express.Multer.File; address: string; manager_name: string; phone: string; }): Promise<Shop> {
        
        let shop_image_url : string = "";
        let shop_public_id : string = ""; 
        

        if(data.file){
            const imageResult = await uploadImage(data.file,"Branch_image");
            shop_image_url = imageResult.data.image_url;
            shop_public_id = imageResult.data.public_id;
            
        }

        const [result] : any = await pool.query('insert into branchs (name,branch_image_url,branch_public_id,address,phone,manager_name) values (?,?,?,?,?,?)',
            [data.name,shop_image_url,shop_public_id,data.address,data.phone,data.manager_name]
        );

        if(!result)throw new AppError("Create Shop Error",400);

        return new Shop(result.insertId,data.name,shop_image_url,shop_public_id,data.address,data.phone,data.manager_name);

    }

}