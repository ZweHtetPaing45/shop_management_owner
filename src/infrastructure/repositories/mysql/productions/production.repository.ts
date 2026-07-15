import {Production} from '../../../../domain/entities/production/production.entity';
import {CreateProductionDTO} from '../../../../application/interface/dtos/production/create-production.dto';
import {ProductionRepository} from '../../../../application/interface/repositories/production/i-production-repositories';
import {Database} from '../../../../infrastructure/database/mysql';
import { uploadImage } from '../../../../services/image.service';

const pool = Database.getInstance().getPool();

export class MySQLProductionRepository implements ProductionRepository{


    async create(data: CreateProductionDTO): Promise<Production> {

        let production_image_url : string = "";
        let production_public_id : string = "";

        if(data.file){
            const imageResult = await uploadImage(data.file,"Production_image");
            production_image_url = imageResult.data.image_url;
            production_public_id = imageResult.data.public_id;
        }

        const [production] : any = await pool.query('insert into owner_production (production_variant_id,name,production_image_url,production_public_id,planned_quantity,duration) values (?,?,?,?,?,?) ', [
            data.production_variant_id,
            data.name,
            production_image_url,
            production_public_id,
            data.planned_quantity,
            data.duration
        ]);

        return new Production(production.insertId,data.production_variant_id,data.name,production_image_url,production_public_id,data.planned_quantity,data.duration);

    }

}
