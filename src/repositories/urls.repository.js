import connection from '../database/db.js';
import { SHORTS, VISITS } from '../enums/tables.js';

const insertShorten = async (shortUrl, url, userId) => {
    return await connection.query(`
        INSERT INTO ${SHORTS} ("shortUrl", url, "userId") 
        VALUES ($1, $2, $3)`, [shortUrl, url, userId]);
} 

const selectShortenById = async id => {
    return await connection.query(`
        SELECT * FROM ${SHORTS} 
        WHERE id = $1 LIMIT 1`, [id])
};

const selectShortenByShort = async shortUrl => {
    return await connection.query(`
        SELECT * FROM ${SHORTS} 
        WHERE "shortUrl" = $1 LIMIT 1;`, [shortUrl]);
}

const insertVisit = async shortId => {
    return await connection.query(`
        INSERT INTO ${VISITS} ("shortId") VALUES ($1);`, [shortId]);
}

export { insertShorten, selectShortenById, selectShortenByShort, insertVisit };