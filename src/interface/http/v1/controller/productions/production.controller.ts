import {CreateProductionVariantDto} from "../../../../../application/interface/dtos/production/create-variant.dto";
import {Request,Response,NextFunction} from "express";
import {CreateProductionVariantUseCase} from "../../../../../application/usecase/production/create-variant.use-case";

export class ProductionVariantController{

    constructor(
        private createProductionVariantUseCase : CreateProductionVariantUseCase
    ){}

    async create(req: Request,res: Response,next : NextFunction){

        try{

            const {size} = (req as any).body;

            if(!size) throw new Error('Enter the production variant size');

            const data : CreateProductionVariantDto = {
                size
            };

            const result : any = await this.createProductionVariantUseCase.execute(data);

            if(result){
                res.status(201).json({
                    success: true,
                    message: "Production variant created successfully",
                    data: result
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Production variant creation failed"
                })
            }

        }catch(error){
            next(error);
        }

    }

}
