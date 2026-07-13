import { Request, Response, NextFunction } from "express";
import {User} from "../../../../../domain/entities/employees/employee.entity";
import {UserDTO} from "../../../../../application/interface/dtos/employees/employee.dto";
import {CreateUserUseCase} from "../../../../../application/usecase/employees/create-employee.use-case";
import { AppError } from "../../../../../application/errors/app-error";
import { createLogger } from "../../../../../infrastructure/logger/create-logger";

const logger = createLogger();


export class UserController{

    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}


    async create(req: Request, res: Response, next: NextFunction){

        try{

            const {name,email,phone,address,branch_id,role_id,password} = req.body;

            if(!name || !email || !phone || !address || !branch_id || !role_id || !password){
                throw new AppError('Enter user Data',500);
            }

            const userData: UserDTO = {
                name,
                email,
                phone,
                address,
                roleId: role_id,
                branchId: branch_id,
                password
            }

            if(!userData.name || !userData.email || !userData.phone || !userData.address || !userData.roleId || !userData.branchId){
                throw new AppError("User data is required", 400);
            }

            const user = await this.createUserUseCase.execute(userData);

            if(user){
                res.status(201).json({
                    success: true,
                    message: "User created successfully",
                    data: user
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "User creation failed"
                })
            }

        }catch(error){
            next(error);
        }

    }

}