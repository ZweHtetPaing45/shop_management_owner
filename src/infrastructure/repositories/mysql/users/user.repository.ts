import {User} from '../../../../domain/entities/users/user.entity';
import {UserRepository} from '../../../../application/interface/repositories/employees-repositories/i-employee-repository';
import {Database} from '../../../database/mysql';
import {UserDTO} from '../../../../application/interface/dtos/employees/employee.dto';


const pool = Database.getInstance().getPool();

export class MySQLUserRepository implements UserRepository{

    async create(data: UserDTO): Promise<User>{

        const [result] : any = await pool.query('insert into employees (owner_id,branch_id,role_id,name,email,phone,address,password) values (?,?,?,?,?,?,?,?)',
            [data.owner_id,data.branchId,data.roleId,data.name,data.email,data.phone,data.address,data.password]
        );

        const user = new User(result.insertId,data.name,data.email,data.phone,data.address,data.roleId,data.branchId,null);

        return user;
    }

}