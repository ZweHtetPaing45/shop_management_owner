import { Owner } from "../../../../domain/entities/owner/owner.entity";

export interface OwnerRepository{

    create(data: {email: string, password: string}): Promise<Owner>;
    findById(id: number): Promise<Owner | null>;
    findByEmail(email: string): Promise<Owner | null>;

}