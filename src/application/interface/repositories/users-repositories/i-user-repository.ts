import {User} from "../../../../domain/entities/users/user.entity";
import {UserDTO} from "../../dtos/users/user.dto";

export interface UserRepository{

    create(data: UserDTO): Promise<User>;

}
