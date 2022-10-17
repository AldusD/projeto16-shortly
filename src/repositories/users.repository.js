import connection from "../database/db.js";
import { SHORTS, USERS, VISITS } from "../enums/tables.js";

const selectUserWithVisitCount = async userId => {
    return await connection.query(`
        SELECT 
            u.id AS id, 
            u.name AS name, 
            COUNT(v.id) AS "visitCount" 
        FROM 
            ${USERS} u 
            LEFT JOIN ${SHORTS} s ON u.id = s."userId" 
            LEFT JOIN ${VISITS} v ON v."shortId" = s.id 
        WHERE u.id = $1 
        GROUP BY (u.id);
        `, 
        [userId]);
}

const selectUserShorts = async userId => {
    return await connection.query(`
        SELECT 
            s.id, 
            s."shortUrl", 
            s.url, 
            COUNT(v.id) AS "visitCount" 
        FROM 
            shorts s 
            LEFT JOIN visits v ON v."shortId" = s.id 
        WHERE s."userId" = $1 
        GROUP BY (s.id) 
        ORDER BY ("visitCount") DESC;
    `, [userId]);
}

const selectRanking = async () => {
    return await connection.query(`
        SELECT 
            u.id AS id, 
            u.name AS name, 
            COUNT(v.id) AS "visitCount" 
        FROM 
            ${USERS} u 
            LEFT JOIN ${SHORTS} s ON u.id = s."userId" 
            LEFT JOIN ${VISITS} v ON v."shortId" = s.id 
        GROUP BY (u.id) 
        ORDER BY "visitCount" DESC;`);
}

export { selectUserWithVisitCount, selectUserShorts };