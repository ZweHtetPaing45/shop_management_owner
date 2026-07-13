import {ProductionVariant} from "../../../../domain/entities/production/variant.entity";
import {CreateProductionVariantDto} from "../../../../application/interface/dtos/production/create-variant.dto";
import {Database} from "../../../database/mysql";
import {AppError} from "../../../../application/errors/app-error";
import { ProductionVariantRepository } from "../../../../application/interface/repositories/production/i-variant-repositories";

const pool = Database.getInstance().getPool();

export class MySQLProductionVariantRepository implements ProductionVariantRepository{

    async create(data: CreateProductionVariantDto): Promise<ProductionVariant> {
        const [result] : any = await pool.query('insert into production_variant(size) values(?)',
            [data.size]
        );

        if(!result)throw new AppError("Can not create production variant",400);

        return new ProductionVariant(result.insertId,data.size);
    }

}