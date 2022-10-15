import bcrypt from 'bcrypt';

import { compareToken } from '../token/token.jwt.js';
import STATUS from "../enums/status.js";
import { USERS } from '../enums/tables.js';
import * as repository from '../repositories/auth.repository.js';
import registerSchema from "../schemas/register.schema.js";
import loginSchema from "../schemas/login.schema.js";

const verifyNewUser = async (req, res, next) => {
    // checks if request body is correct
    const { name, password, confirmPassword } = req.body;
    const email = req.body.email.toLowerCase();
    if(password != confirmPassword) return res.sendStatus(STATUS.UNPROCESSABLE_ENTITY);

    const isValid = registerSchema.validate({ name, email, password });
    if(isValid.error) return res.status(422).send(isValid.error.message);
    
    // checks if email is in use
    try {
        const conflict = await repository.selectUserByEmail(email);
        if(conflict.rowCount != 0) return res.sendStatus(STATUS.CONFLICT);
    
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }

    res.locals.user = { name, email, password };
    next();
}

const verifyUser = async (req, res, next) => {
    // checks if request body is correct
    const { password } = req.body;
    const email = req.body.email.toLowerCase();
    
    const isValid = loginSchema.validate({ email, password });
    if(isValid.error) return res.status(STATUS.UNPROCESSABLE_ENTITY).send(isValid.error.message);
    // checks user's existence and verify its password 
    try {
        const user = await repository.selectUserByEmail(email);
        console.log(user.rows[0])
        if(user.rowCount != 1) return res.sendStatus(STATUS.UNAUTHORIZED); // email not registered (no user)
        
        const validLogin = bcrypt.compareSync(password, user.rows[0].password);
        if(!validLogin) return res.sendStatus(STATUS.UNAUTHORIZED); // wrong password
        
        res.locals.userId = user.rows[0].id; // id to create the login session   
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }

    next();
}

export { verifyNewUser, verifyUser };