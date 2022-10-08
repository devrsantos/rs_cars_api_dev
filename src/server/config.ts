import express from "express";
import bodyParser from "body-parser";

import {router} from "./routes/rotasVeiculos";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((request, response, next) => {
    response.append("Access-Control-Allow-Origin", ["*"]);
    response.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(router);

export {app};
