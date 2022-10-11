import e from "express";
import { Crud } from "../models/consultasDB";

const router = e.Router();

const crud = new Crud();

router.get("/listar_todos", crud.listar_todos)

router.get("/listar_Individual", crud.listar_individual);

router.post("/cadastrar", crud.cadastrar);

router.put("/alterar", crud.alterar);

router.delete("/deletar", crud.deletar);

export {router};
