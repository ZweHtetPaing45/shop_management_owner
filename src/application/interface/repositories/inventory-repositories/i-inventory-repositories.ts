import { Inventory } from "../../../../domain/entities/inventory/inventory.entiry";
import { CreateInventoryDto } from "../../dtos/inventory/create-inventory.dto";

export interface InventoryRepository{

    create(data : CreateInventoryDto): Promise<Inventory>;

}