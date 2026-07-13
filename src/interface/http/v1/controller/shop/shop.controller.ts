import { Shop } from "../../../../../domain/entities/shop/shop.entity";
import { CreateShopUseCase } from "../../../../../application/usecase/shop/create-shop.use-case";
import { AppError } from "../../../../../application/errors/app-error";
import { Request,Response,NextFunction } from "express";
import { createLogger } from "../../../../../infrastructure/logger/create-logger";


export class ShopController{

    constructor(
        private createShopUserCase: CreateShopUseCase
    ){}

    async create(req: Request,res: Response,next: NextFunction){
        
        try{

            const file = (req as any).file;

            const logger =createLogger();


            if(!file) throw new AppError('Enter the file',400);

            const {name,address,phone,manager_name} = req.body;

            if(!name || !address || !phone || !manager_name)throw new AppError("Enter the Data",400);



            const data = {
                name,
                file,
                address,
                manager_name,
                phone
            }

            const result = await this.createShopUserCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Create Branch Successfully",
                    result
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Can not fail create branch"
                })
            }

        }catch(error){
            next(error);
        }

    }

}