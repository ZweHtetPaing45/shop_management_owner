import { Inventory } from "../../../../domain/entities/inventory/inventory.entiry";
import { InventoryRepository } from "../../../../application/interface/repositories/inventory-repositories/i-inventory-repositories";
import { Database } from "../../../database/mysql";
import { CreateInventoryDto } from "../../../../application/interface/dtos/inventory/create-inventory.dto";
import { AppError } from "../../../../application/errors/app-error";


const pool = Database.getInstance().getPool();


export class MySQLInventoryRepository implements InventoryRepository{

    async create(data: CreateInventoryDto): Promise<Inventory> {
        
        const [result] : any = await pool.query('insert into owner_inventory(owner_id,code,item,unit,cost,stock_quantiry,date) values(?,?,?,?,?,?,?) ',
            [data.owner_id,data.code,data.item,data.unit,data.stock_quantiry,data.date]
        );

        if(!result)throw new AppError("Can not create Inventory",400);

        return new Inventory(result.insertId,data.owner_id,data.code,data.item,data.unit,data.cost,data.stock_quantiry,data.date);

    }

}