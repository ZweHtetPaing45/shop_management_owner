import {User} from '../../../domain/entities/employees/employee.entity';
import {UserRepository} from '../../interface/repositories/employees-repositories/i-employee-repository';
import {UserDTO} from '../../interface/dtos/employees/employee.dto';
import {AppError} from '../../errors/app-error';


export class CreateUserUseCase{

    constructor(
        private userRepository: UserRepository
    ){}

    async execute(data: UserDTO): Promise<User>{

        const user = await this.userRepository.create(data);

        if(!user)throw new AppError("Can not create user",401);

        return new User(user.id,user.name,user.email,user.phone,user.address,user.roleId,user.branchId,null);

    }

}