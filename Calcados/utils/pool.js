import sql from 'mssql';
import { sqlConfig } from './config.js';

export async function CreatePoolSqlServer(){
    try {
        const pool = new sql.ConnectionPool(sqlConfig)

        await pool.connect();

        return pool
        

    } catch (error) {
        console.log(`Erro to create pool connection: ${error}`)
        return false
    }
}