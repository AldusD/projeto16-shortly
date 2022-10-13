import STATUS from "../enums/status.js";
import { USERS } from '../enums/tables.js';
import connection from "../database/db.js";
import registerSchema from "../schemas/register.schema.js";

const verifyNewUser = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    if(password != confirmPassword) return res.sendStatus(STATUS.UNPROCESSABLE_ENTITY);

    const isValid = registerSchema.validate({ name, email, password });
    if(isValid.error) return res.status(422).send(isValid.error.message);

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

export { verifyNewUser };