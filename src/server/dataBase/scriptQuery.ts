const consultas = {
    geral: () => {
        return "SELECT * FROM rs_car.veiculos";
    },
    individual: (modelo_veiculo: string) => {
        return `SELECT * FROM rs_car.veiculos WHERE modelo_veiculo = "${modelo_veiculo}"`;
    },
    cadastrar: (
        modelo_veiculo: string,
        descricao_veiculo: string,
        valor_veiculo: string,
        cor_veiculo: string, 
        portas_veiculo: number, 
        combustivel_veiculo: string, 
        categoria_veiculo: string,
        cambio_veiculo: string,
        kilometragem_veiculo: number,
        ano_veiculo: string,
        imagem_veiculo: string
    ) => {
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
            "${modelo_veiculo}",
            "${descricao_veiculo}",
            "${valor_veiculo}",
            "${cor_veiculo}",
            "${portas_veiculo}",
            "${combustivel_veiculo}",
            "${categoria_veiculo}",
            "${cambio_veiculo}",
            "${kilometragem_veiculo}",
            "${ano_veiculo}",
            "${imagem_veiculo}"
        )`;
    },
    deletar: (modelo_veiculo: string) => {
        return `DELETE FROM rs_car.veiculos WHERE modelo_veiculo = "${modelo_veiculo}"`;
    },
    alterar: (
        modelo_veiculo: string, 
        descricao_veiculo: string,
        valor_veiculo: string, 
        cor_veiculo: string, 
        portas_veiculo: string, 
        combustivel_veiculo: string, 
        categoria_veiculo: string,
        cambio_veiculo: string,
        kilometragem_veiculo: string,
        ano_veiculo: string,
        imagem_veiculo: string
    ) => {
        return `UPDATE veiculos SET 
        modelo_veiculo = "${modelo_veiculo}", 
        descricao_veiculo = "${descricao_veiculo}",
        valor_veiculo = "${valor_veiculo}",
        cor_veiculo = "${cor_veiculo}", 
        portas_veiculo = "${portas_veiculo}", 
        combustivel_veiculo = "${combustivel_veiculo}", 
        categoria_veiculo = "${categoria_veiculo}",
        cambio_veiculo = "${cambio_veiculo}",
        kilometragem_veiculo = "${kilometragem_veiculo}",
        ano_veiculo = "${ano_veiculo}",
        imagem_veiculo = "${imagem_veiculo}"
        WHERE modelo_veiculo = "${modelo_veiculo}"`;
    },
};

export default consultas;
