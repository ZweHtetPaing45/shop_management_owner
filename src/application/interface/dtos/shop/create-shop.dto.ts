
export interface CreateShopDto{
    name: string;
    file: Express.Multer.File;
    address: string;
    manager_name: string;
    phone: string
}