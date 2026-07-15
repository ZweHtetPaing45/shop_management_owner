
export class Production {
    constructor(
        public readonly id: number | null,
        public readonly production_variant_id: number,
        public readonly name: string,
        public readonly product_image_url: string,
        public readonly product_public_id: string,
        public readonly planned_quantity: number,
        public readonly duration: number
    ) {}
}