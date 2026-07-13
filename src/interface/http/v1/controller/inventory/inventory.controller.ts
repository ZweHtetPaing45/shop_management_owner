import { Inventory } from "../../../../../domain/entities/inventory/inventory.entiry";
import { CreateInventoryDto } from "../../../../../application/interface/dtos/inventory/create-inventory.dto";
import { CreateInventoryUseCase } from "../../../../../application/usecase/inventory.use-case.ts/create-inventory.use-case";
import { Request,Response,NextFunction } from "express";
import { AppError } from "../../../../../application/errors/app-error";

export class InventoryController{


    constructor(
        private createInventoryUserCase : CreateInventoryUseCase
    ){}


    async create(req: Request,res: Response,next : NextFunction){

        try{

            const {code,item,stock,unit,cost,date} = (req as any).body;

            if(!code || !item || !stock || !unit || !cost || !date) throw new AppError('Enter the Inventory full data',500);


            const data : CreateInventoryDto = {
                code,
                item,
                stock_quantiry : stock,
                unit,
                cost,
                date
            };

            const result : any = await this.createInventoryUserCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Inventory created successfully",
                    data: result
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Inventory creation failed"
                })
            }

        }catch(error){
            next(error);
        }

    }

}