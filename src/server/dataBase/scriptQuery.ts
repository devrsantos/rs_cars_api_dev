const consultas = {
    geral: () => {
        return "SELECT * FROM rs_car.veiculos";
    },
    individual: (paramentro: string, valor_query: string) => {
        return `SELECT * FROM rs_car.veiculos WHERE ${paramentro} = "${valor_query}"`;
    },
    cadastrar: (scriptQuery: string| undefined) => {
        return `INSERT INTO veiculos (
                    modelo_veiculo, 
                    descricao_veiculo,
                    valor_veiculo, 
                    cor_veiculo, 
                    portas_veiculo, 
                    combustivel_veiculo, 
                    categoria_veiculo,
                    cambio_veiculo,
                    kilometragem_veiculo,
                    ano_veiculo,
                    imagem_veiculo
                ) 
        VALUES (
            ${scriptQuery}
        )`;
    },
    alterar: (scriptQuery: string| undefined, modelo_veiculo: string) =>  {
        return `UPDATE rs_car.veiculos SET ${scriptQuery} WHERE modelo_veiculo = "${modelo_veiculo}"`
    },
    deletar: (paramentro: string, valor_query: string) => {
        return `DELETE FROM rs_car.veiculos WHERE ${paramentro} = "${valor_query}"`;
    },
};

export {consultas};
