

export interface CreateInventoryDto{

    owner_id : number;
    code : string;
    item : string;
    unit : string;
    cost : number;
    stock_quantiry : number;
    date : string;
}