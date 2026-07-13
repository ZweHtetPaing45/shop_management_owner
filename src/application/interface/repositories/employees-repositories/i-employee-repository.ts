import {User} from "../../../../domain/entities/users/user.entity";
import {UserDTO} from "../../dtos/employees/employee.dto";

export interface UserRepository{

    create(data: UserDTO): Promise<User>;

}
