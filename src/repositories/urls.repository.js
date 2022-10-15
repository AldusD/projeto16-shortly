import connection from '../database/db.js';
import { SHORTS } from '../enums/tables.js';

const insertShorten = async (shortUrl, url, userId) => {
    return await connection.query(`
        INSERT INTO ${SHORTS} ("shortUrl", url, "userId") 
        VALUES ($1, $2, $3)`, [shortUrl, url, userId]);
} 

const selectShortenById = async id => await connection.query(`SELECT * FROM ${SHORTS} WHERE id = $1 LIMIT 1`, [id]);

export { insertShorten, selectShortenById };