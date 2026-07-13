import {CreateOwner} from '../../../../../application/usecase/owner/create-owner.use-case';
import {Request,Response,NextFunction} from 'express';
import { AppError } from '../../../../../application/errors/app-error';
import {LoginOwnerUseCase} from '../../../../../application/usecase/owner/login-owner.use-case';

export class OwnerController{

    constructor(
        private createOwner: CreateOwner,
        private loginOwner: LoginOwnerUseCase
    ){}


    async create(req: Request, res: Response, next: NextFunction) {

        try{

            const {email,password} = req.body;

            if(!email || !password)throw new AppError("Email and password are required",400);

            const owner = await this.createOwner.execute({email,password});

            res.status(201).json({
                success: true,
                message: "Owner created successfully",
                owner
            });

        }catch(error){
            next(error);
        }

    }

    async login(req: Request,res: Response, next: NextFunction){
        try{

            const {email,password} = req.body;

            if(!email || !password)throw new AppError("Email and password are required",400);

            const token = await this.loginOwner.execute({email,password});

            if(token){
                res.status(200).json({
                    success: true,
                    message: "Login successful",
                    token
                })
            }else{
                res.status(401).json({
                    success: false,
                    message: "Invalid email or password"
                })
            }

        }catch(error){
            next(error);
        }
    }

}