import { Owner } from "../domain/entities/owner/owner.entity";

declare global {
    namespace Express {
        interface Request {
            owner?: Owner;
        }
        interface Multer{
            File: any
        }

    }
}

export {};