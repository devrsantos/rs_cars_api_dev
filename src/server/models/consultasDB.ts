import { Request, Response } from "express";
import { conexao } from "../dataBase/conexaoDB";
import { consultas } from "../dataBase/scriptQuery";
import { ValidacaoBody } from "./validacao";

let queryString;

class Crud {
    listar_todos = async(request: Request, response: Response) => {
        queryString = await consultas.geral();
    
        conexao.query(queryString, (erroSQL, returnSQL) => {
            if (erroSQL !== null) {
                response.status(401).json({ Error: "Autenticação não Autorizada" });
            } 
            return response.status(200).json(returnSQL); 
        });
    }

    listar_individual = async (request: Request, response: Response) => {
        const objeto_key = Object.keys(request.body).toString();

        let objeto_value = request.body[objeto_key];
        
        if (objeto_value !== null && typeof(objeto_value) === "string") {
            queryString = await consultas.individual(objeto_key, objeto_value);
        
            conexao.query(queryString, (erroSQL, returnSQL) => {
                if (erroSQL !== null) {
                    response.status(404).json({ Erro: erroSQL.sqlMessage });
                }
                response.status(200).json(returnSQL);
            });
        } else {
            response.status(400).json({ Erro: "Verificar o Paramentro Informado" });
        }
    }

    cadastrar = async (request: Request, response: Response) => {
        const validacaoBody = new ValidacaoBody()
        const scriptQuery: string|undefined = validacaoBody.validacao_cadastro(request);
        if (typeof(scriptQuery) !== undefined) {
            queryString = await consultas.cadastrar(scriptQuery);
        
            conexao.query(queryString, (erroSQL, returnSQL) => {
                if (erroSQL !== null) {
                    response.status(400).json({ Erro: erroSQL.sqlMessage });
                } 
                response.status(201).json(returnSQL);
            });
        }
        else {
            response.status(400).json({ Erro: "Verificar o Paramentro Informado" });
        }
    }

    alterar = async (request: Request, response: Response) => {
        const validacaoBody = new ValidacaoBody()
        const scriptQuery: string|undefined = validacaoBody.validacao_update(request)
        if (typeof(scriptQuery)!== undefined) {
            queryString = await consultas.alterar(scriptQuery, request.body.modelo_veiculo);
            conexao.query(queryString, (erroSQL, returnSQL) => {
                if (erroSQL !== null) {
                    response.status(404).json({ Erro: erroSQL.sqlMessage });
                } 
                response.status(204).json(returnSQL);
            });
        }
        else {
            response.status(400).json({ Erro: "Verificar o Paramentro Informado" });
        }
    }

    deletar = async (request: Request, response: Response) => {
        const objeto_key = Object.keys(request.body).toString();

        let objeto_value = request.body[objeto_key];

        if (objeto_value !== null && typeof(objeto_value) === "string") {
            queryString = await consultas.deletar(objeto_key, objeto_value);

            conexao.query(queryString, (erroSQL, returnSQL) => {
                if (erroSQL !== null) {
                    response.status(404).json({ Erro: erroSQL.sqlMessage });
                }
                response.status(204).json(returnSQL);
            });
        } else {
            response.status(400).json({ Erro: "Verificar o Paramentro Informado" });
        }
    }
    
}

export {Crud}