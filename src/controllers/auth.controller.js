import bcrypt from 'bcrypt';

import { createToken } from '../token/token.jwt.js';
import * as repository from '../repositories/auth.repository.js';
import STATUS from "../enums/status.js";
import { USERS, SESSIONS } from '../enums/tables.js';

const registerUser = async (req, res) => {
    const { name, email, password } = res.locals.user;
    const hash = bcrypt.hashSync(password, 10);

    try {
        const result = await repository.insertUser(name, email, hash)
        return res.sendStatus(STATUS.CREATED);
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

const login = async (req, res) => {
    // generating token
    const { userId } = res.locals;    
    const token = createToken({ userId });

    return res.status(STATUS.OK).send({ token });
}

export { registerUser, login };