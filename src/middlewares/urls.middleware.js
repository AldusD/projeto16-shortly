import { compareToken } from "../token/token.jwt.js";

import STATUS from "../enums/status.js";

const verifyConnection = async (req, res, next) => {
    // get pure token
    const token = req.headers.authorization?.replace("Bearer ", '');
    if(!token) return res.sendStatus(STATUS.UNAUTHORIZED);
    console.log(token)

    // check cover isnt expired or doesnt match any valid token
    compareToken(token, (error, user) => {
        if(error) {
            console.log(error)
            return res.sendStatus(STATUS.UNAUTHORIZED);
        }
        res.locals.user = user;
        next(); 
    })
}

const verifyUrl = async (req, res, next) => {
    const { userId } = res.locals.user;
    const { url } = req.body;
    if(!url) return res.sendStatus(STATUS.UNPROCESSABLE_ENTITY);
    
    const urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
    if(!urlRegex.test(url)) return res.sendStatus(STATUS.UNPROCESSABLE_ENTITY);

    res.locals.url = url;
    next()
}

export { verifyConnection, verifyUrl };