import { Inventory } from "../../../domain/entities/inventory/inventory.entiry";
import { AppError } from "../../errors/app-error";
import { CreateInventoryDto } from "../../interface/dtos/inventory/create-inventory.dto";
import { InventoryRepository } from "../../interface/repositories/inventory-repositories/i-inventory-repositories";




export class CreateInventoryUseCase{

    constructor(
        private inventoryRepository : InventoryRepository
    ){}

    async execute(data : CreateInventoryDto): Promise<Inventory>{

        const result : any = await this.inventoryRepository.create(data);

        if(!result)throw new AppError("Can not create Inventory",500);

        return result;

    }

}