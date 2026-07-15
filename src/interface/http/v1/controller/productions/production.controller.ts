import { Request, Response, NextFunction } from "express";

import { CreateProductionUseCase } from "../../../../../application/usecase/production/create-production.use-case";
import { CreateIngredientUseCase } from "../../../../../application/usecase/production/create-ingredient.use-case";
import { CreateProductionIngredientUseCase } from "../../../../../application/usecase/production/create-production-ingredient.use-case";

import { CreateProductionDTO } from "../../../../../application/interface/dtos/production/create-production.dto";
import { CreateIngredientDTO } from "../../../../../application/interface/dtos/production/create-ingredient.dto";
import { CreateProductionIngredientDTO } from "../../../../../application/interface/dtos/production/create-production-ingredient.dto";

import { AppError } from "../../../../../application/errors/app-error";

export class ProductionController {
    constructor(
        private createProductionUseCase: CreateProductionUseCase,
        private createIngredientUseCase: CreateIngredientUseCase,
        private createProductionIngredientUseCase: CreateProductionIngredientUseCase
    ) {}

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                production_name,
                planned_quantity,
                duration,
                production_variant_id,
            } = req.body;

            if (!production_name || !planned_quantity || !duration) {
                throw new AppError("Enter Production Data", 400);
            }

            const file = (req as any).file;

            if (!file) {
                throw new AppError("Enter production image", 400);
            }

            const productionData: CreateProductionDTO = {
                name: production_name,
                planned_quantity: Number(planned_quantity),
                duration: Number(duration),
                production_variant_id: Number(production_variant_id),
                file,
            };

            const production: any = await this.createProductionUseCase.execute(productionData);

            // FormData က JSON.stringify() နဲ့ပိုလာရင် parse
            let ingredients: any[] = [];

            if (req.body.ingredients) {
                ingredients =
                    typeof req.body.ingredients === "string"
                        ? JSON.parse(req.body.ingredients)
                        : req.body.ingredients;
            }

            const createdIngredients = [];

            if (Array.isArray(ingredients) && ingredients.length > 0) {
                for (const item of ingredients) {
                    const ingredientData: CreateIngredientDTO = {
                        name: item.ingredient_name,
                        quantity: Number(item.quantity),
                        unit: item.unit,
                    };

                    const ingredient: any =
                        await this.createIngredientUseCase.execute(
                            ingredientData
                        );

                    const productionIngredientData: CreateProductionIngredientDTO =
                        {
                            owner_production_id: production.id,
                            ingredient_id: ingredient.id,
                        };

                    await this.createProductionIngredientUseCase.execute(
                        productionIngredientData
                    );

                    createdIngredients.push(ingredient);
                }
            }

            return res.status(201).json({
                success: true,
                message: "Production created successfully",
                data: {
                    production,
                    ingredients: createdIngredients,
                },
            });
        } catch (error) {
            next(error);
        }
    }
}