

export class Inventory{

    constructor(
        public id : number | null,
        public code : string,
        public item : string,
        public unit : string,
        public cost : number,
        public stock_quantiry : number,
        public date : string
    ){}

}