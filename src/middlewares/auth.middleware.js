import bcrypt from 'bcrypt';

import STATUS from "../enums/status.js";
import { USERS } from '../enums/tables.js';
import connection from "../database/db.js";
import registerSchema from "../schemas/register.schema.js";
import loginSchema from "../schemas/login.schema.js";

const verifyNewUser = async (req, res, next) => {
    // checks if request body is correct
    const { name, email, password, confirmPassword } = req.body;
    if(password != confirmPassword) return res.sendStatus(STATUS.UNPROCESSABLE_ENTITY);

    const isValid = registerSchema.validate({ name, email, password });
    if(isValid.error) return res.status(422).send(isValid.error.message);
    
    // checks if email is in use
    try {
        const conflict = await connection.query(`SELECT * FROM ${USERS} WHERE email = $1`, [email]);
        if(conflict.rows.length != 0) return res.sendStatus(STATUS.CONFLICT);
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }

    res.locals.user = { name, email, password };
    next();
}

const verifyUser = async (req, res, next) => {
    // checks if request body is correct
    const { email, password } = req.body;
    
    const isValid = loginSchema.validate({ email, password });
    if(isValid.error) return res.status(STATUS.UNPROCESSABLE_ENTITY).send(isValid.error.message);
    
    // checks user's existence and verify its password 
    try {
        const user = await connection.query(`SELECT * FROM ${USERS} WHERE email = $1 LIMIT 1`, [email]);
        if(user.rows.length != 1) return res.sendStatus(STATUS.UNAUTHORIZED); // email not registered (no user)
        
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