import { Inventory } from "../../../../domain/entities/inventory/inventory.entiry";
import { InventoryRepository } from "../../../../application/interface/repositories/inventory-repositories/i-inventory-repositories";
import { Database } from "../../../database/mysql";
import { CreateInventoryDto } from "../../../../application/interface/dtos/inventory/create-inventory.dto";
import { AppError } from "../../../../application/errors/app-error";
import { UpdateInventoryDTO } from "../../../../application/interface/dtos/inventory/update-inventory.dto";


const pool = Database.getInstance().getPool();


export class MySQLInventoryRepository implements InventoryRepository{

    async create(data: CreateInventoryDto): Promise<Inventory> {
        
        const [result] : any = await pool.query('insert into owner_inventory(code,item,unit,cost,stock_quantity,date) values(?,?,?,?,?,?) ',
            [data.code,data.item,data.unit,data.cost,data.stock_quantity,data.date]
        );

        if(!result)throw new AppError("Can not create Inventory",400);

        return new Inventory(result.insertId,data.code,data.item,data.unit,data.cost,data.stock_quantity,data.date);

    }

    async update(data: UpdateInventoryDTO): Promise<Inventory> {
        
        let updates : string[] =[];
        let values : any = [];

            if (data.code !== undefined) {
            updates.push("code = ?, ");
            values.push(data.code);
        }

        if (data.item !== undefined) {
            updates.push("item = ?, ");
            values.push(data.item);
        }

        if (data.unit !== undefined) {
            updates.push("unit = ?, ");
            values.push(data.unit);
        }

        if (data.cost !== undefined) {
            updates.push("cost = ?, ");
            values.push(data.cost);
        }

        if (data.stock_quantity !== undefined) {
            updates.push("stock_quantity = ?, ");
            values.push(data.stock_quantity);
        }

        if(updates.length === 0){
            throw new AppError("No fields to update",400);
        }

        values.push(data.id);

        const query = `update owner_inventory set ${updates.join(", ")} where id = ?`;

        const [result] : any = await pool.query(query,values);

        if(result.affectedRows === 0)throw new AppError("Can not update Inventory",400);

        const [rows] : any = await pool.query('select * from owner_inventory where id = ?',[data.id]);

        const inventory = rows[0];

        return new Inventory(inventory.id,inventory.code,inventory.item,inventory.unit,inventory.cost,inventory.stock_quantity,inventory.date);
        

    }

}