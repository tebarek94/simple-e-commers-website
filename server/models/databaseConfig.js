import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();

const databaseConnaction = mysql.createConnection({
  database: process.env.database,
  host: process.env.host,
  password: process.env.password,
  user: process.env.user,
});

export default databaseConnaction;
