import { CreatePoolSqlServer } from "../../utils/pool.js"
 const pool = await CreatePoolSqlServer();

export class Client{
    constructor(email, senha, cel, statusUser, id){
        this.email = email,
        this.senha = senha,
        this.cel = cel,
        this.statusUser = statusUser
        this.id = id
    }

    static async SelectAll(){
        try {
            const { recordset } = await pool.query('select * from usuario')
            return recordset
        } catch (error) {
            console.log("error script ClientModel.js " + error)
            return false
        }
    }

}