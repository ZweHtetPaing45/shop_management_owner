import { Owner } from "../../../domain/entities/owner/owner.entity";
import { AppError } from "../../errors/app-error";
import { OwnerRepository } from "../../interface/repositories/owner-repositories/i-owner-repository";
import { HashPassword } from "../../../infrastructure/util/hash-password.util";
import { CreateOwnerDto } from "../../interface/dtos/owner/create-owner.dto";
import { createLogger } from "../../../infrastructure/logger/create-logger";


    const logger = createLogger();

export class CreateOwner{

    constructor(
        private ownerRepository: OwnerRepository
    ){}

    async execute(data: CreateOwnerDto): Promise<Owner>{

        const exit = await this.ownerRepository.findByEmail(data.email);

        if(exit)throw new AppError("Can not create",401);

        const hashedPassword = await HashPassword.hash(data.password);

        logger.info(`Creating owner with email: ${data.email}`);

        const owner = await this.ownerRepository.create({email: data.email, password: hashedPassword});

        return owner;

    }

}