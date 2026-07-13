import {User} from "../../../../domain/entities/employees/employee.entity";
import {UserDTO} from "../../dtos/employees/employee.dto";

export interface UserRepository{

    create(data: UserDTO): Promise<User>;

}
