import connection from "../database/db.js";
import { USERS, SHORTS, VISITS } from "../enums/tables.js";

const selectRanking = async () => {
    return await connection.query(`
        SELECT 
            u.id AS id, 
            u.name AS name, 
            COUNT(DISTINCT s.id) AS "linksCount",
            COUNT(v.id) AS "visitCount" 
        FROM 
            ${USERS} u 
            LEFT JOIN ${SHORTS} s ON u.id = s."userId" 
            LEFT JOIN ${VISITS} v ON v."shortId" = s.id 
        GROUP BY (u.id) 
        ORDER BY "visitCount" DESC
        LIMIT 10;`);
}

export { selectRanking };