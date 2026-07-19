import { Inventory } from "../../../../domain/entities/inventory/inventory.entiry";
import { CreateInventoryDto } from "../../dtos/inventory/create-inventory.dto";
import { UpdateInventoryDTO } from "../../dtos/inventory/update-inventory.dto";

export interface InventoryRepository{

    create(data : CreateInventoryDto): Promise<Inventory>;
    update(data : UpdateInventoryDTO): Promise<Inventory>;
}