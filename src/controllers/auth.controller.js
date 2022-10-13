import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import connection from "../database/db.js";
import STATUS from "../enums/status.js";
import { USERS, SESSIONS } from '../enums/tables.js';

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

const login = async (req, res) => {
    const token = uuid();
    const { userId } = res.locals;
    const postedTime = Date.now();

    try {
        const session = await connection.query(`
            INSERT INTO ${SESSIONS} (token, "userId", "postedTime") VALUES ($1, $2, $3)`,
            [token, userId, postedTime]);
        
        return res.status(STATUS.OK).send({ token });
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

export { registerUser, login };