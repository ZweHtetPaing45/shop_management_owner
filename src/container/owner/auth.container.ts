import { MySQLOwnerRepositories } from "../../infrastructure/repositories/mysql/owner/owner.repository";
import { CreateOwner } from "../../application/usecase/owner/create-owner.use-case";
import { OwnerController } from "../../interface/http/v1/controller/owner/owner.controller";
import {LoginOwnerUseCase} from '../../application/usecase/owner/login-owner.use-case';
import {JwtTokenService} from "../../infrastructure/security/jwt-token-service";

const ownerRepo = new MySQLOwnerRepositories();
const jwtTokenService = new JwtTokenService();

const createOwnerUC = new CreateOwner(ownerRepo);
const loginOwnerUC = new LoginOwnerUseCase(ownerRepo, jwtTokenService);

export const ownerContainer = new OwnerController(createOwnerUC, loginOwnerUC);