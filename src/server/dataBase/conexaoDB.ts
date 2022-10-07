import mysql from "mysql";
import { KeysUser } from "./keys";

const configDataBase = {
    host: "localhost",
    user: KeysUser.user,
    password: KeysUser.password,
    database: "rs_car"
}

const conexao = mysql.createConnection(configDataBase);

export { conexao };
