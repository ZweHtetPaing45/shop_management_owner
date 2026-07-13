
import {CreateUserUseCase} from '../../application/usecase/employees/create-employee.use-case';
import { MySQLUserRepository } from '../../infrastructure/repositories/mysql/employees/employee.repository';
import {UserController} from '../../interface/http/v1/controller/employees/employee.controller';
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";
import { JwtTokenService } from "../../infrastructure/security/jwt-token-service";
import { MySQLOwnerRepositories } from "../../infrastructure/repositories/mysql/owner/owner.repository";


const ownerRepo = new MySQLOwnerRepositories();
const jwtTokenService = new JwtTokenService();

const UserRepo = new MySQLUserRepository();

const createUserUC = new CreateUserUseCase(UserRepo);

export const userController = new UserController(createUserUC);

export const authMiddleware = new AuthMiddleware(jwtTokenService, ownerRepo);