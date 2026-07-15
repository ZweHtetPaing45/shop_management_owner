
export interface CreateProductionDTO{

    production_variant_id : number;
    name : string;
    file: Express.Multer.File;
    planned_quantity : number;
    duration : number;

}
