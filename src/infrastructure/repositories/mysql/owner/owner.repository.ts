import { Owner } from "../../../../domain/entities/owner/owner.entity";
import { OwnerRepository } from "../../../../application/interface/repositories/owner-repositories/i-owner-repository";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";

const pool = Database.getInstance().getPool();

export class MySQLOwnerRepositories implements OwnerRepository{

    async create(data: {email: string, password: string}) : Promise<Owner> {
        
        const [result] : any =  await pool.query('insert into owner (email, password) values (?, ?)',[data.email,data.password]);

        if(!result)throw new AppError("Can no owner account create",400);

        return new Owner(result.insertId,result.email,null);

    }

    async findByEmail(email: string): Promise<Owner | null> {
        
        const [rows] : any = await pool.query('select * from owner where email = ?',[email]);

        if(!rows) throw new AppError('Can not found Owner',400);

        if(rows.length === 0) {
            return null;
        }

        const row = rows[0];

        return new Owner(row.id,row.email,row.password);

    }

    async findById(id: number): Promise<Owner | null> {
        
        const [row] : any = await pool.query('select * from owner where id = ?',[id]);

        if(!row) throw new AppError('Can not found Owner',400);

        if(row === undefined || row === null) return null;

        
        return new Owner(row[0].id,row[0].email,null);

    }

}