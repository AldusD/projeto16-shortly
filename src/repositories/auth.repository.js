import connection from "../database/db.js";
import { USERS } from "../enums/tables.js";

const insertUser = async (name, email, hash) => {
    return await connection.query(`
            INSERT INTO ${USERS} (name, email, password) 
            VALUES ($1, $2, $3);`, [name, email, hash]);
}

const selectUserByEmail = async email => {
    return await connection.query(`SELECT * FROM ${USERS} WHERE email = $1 LIMIT 1;`, [email]);
}

export { insertUser, selectUserByEmail };