import connection from '../database/db.js';
import { SHORTS } from '../enums/tables.js';

const insertShorten = async (shortUrl, url, userId) => {
    return await connection.query(`
        INSERT INTO ${SHORTS} ("shortUrl", url, "userId") 
        VALUES ($1, $2, $3)`, [shortUrl, url, userId]);
} 

export { insertShorten };