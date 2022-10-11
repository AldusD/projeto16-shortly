import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URI
    });
console.log("INSERT INTO postgres (alive) VALUES ('Hello world!');");
    
export default connection;