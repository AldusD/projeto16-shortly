import bcrypt from 'bcrypt';

import connection from "../database/db.js";
import STATUS from "../enums/status.js";
import { USERS } from '../enums/tables.js';

const registerUser = async (req, res) => {
    const { name, email, password } = res.locals.user;
    const hash = bcrypt.hashSync(password, 10);

    try {
        const newUser = await connection.query(`
            INSERT INTO ${USERS} (name, email, password) 
            VALUES ($1, $2, $3);`, [name, email, hash]);
        return res.sendStatus(STATUS.CREATED);
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

export { registerUser };