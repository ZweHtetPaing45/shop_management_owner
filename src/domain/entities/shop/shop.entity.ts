export class Shop{

    constructor(
        public id : number | null,
        public name : string,
        public branch_image_url : string,
        public branch_public_id : string,
        public address : string,
        public phone : string,
        public manager_name : string
    ){}

}