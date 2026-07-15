export class ProductionIngredient{

    constructor(
        public readonly id : number | null,
        public readonly ingredient_id : number,
        public readonly owner_production_id : number,
    ){}

}