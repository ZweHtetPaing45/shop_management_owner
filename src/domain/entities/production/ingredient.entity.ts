export class Ingredient{

    constructor(
        public readonly id: number | null,
        public readonly name: string,
        public readonly quantity: number,
        public readonly unit : string
    ){}
}