import {AppError} from "../../errors/app-error";
import {OwnerRepository} from "../../interface/repositories/owner-repositories/i-owner-repository";
import {HashPassword} from "../../../infrastructure/util/hash-password.util";
import {LoginOwnerDto} from "../../interface/dtos/owner/login-owner.dto";
import {TokenService} from "../../interface/service/i-token-service";
import {LoginResponseOwnerDto} from "../../interface/dtos/owner/login-response.dto";
import { createLogger } from "../../../infrastructure/logger/create-logger";

const logger = createLogger();

export class LoginOwnerUseCase{

    constructor(
        private ownerRepository: OwnerRepository,
        private tokenService: TokenService
    ){}


    async execute(data: LoginOwnerDto): Promise<LoginResponseOwnerDto>{
        
        const owner : any = await this.ownerRepository.findByEmail(data.email);

        if(!owner) throw new AppError("Owner not found",404);

        logger.info(`${owner} found`);

        const isPasswordValid = await HashPassword.compare(data.password,owner.password);

        if(!isPasswordValid) throw new AppError("Invalid password",401);

        const token = this.tokenService.generate({id: owner.id,email: owner.email});

        return {
            owner: {
                id: owner.id,
                email: owner.email
            },
            accessToken: token
        };

    }

}