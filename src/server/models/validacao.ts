class ValidacaoBody {
    validacao_cadastro = (request: any) => {
        const { 
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
        } = request.body;
        
        const modeloVeiculo = modelo_veiculo !== null && modelo_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(modelo_veiculo) === "string" ? modelo_veiculo : false;
        const descricaoVeiculo = descricao_veiculo !== null && descricao_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(descricao_veiculo) === "string" ? descricao_veiculo : false;
        const valorVeiculo = valor_veiculo !== null && valor_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(valor_veiculo) === "string" ? valor_veiculo : false;
        const corVeiculo = cor_veiculo !== null && cor_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(cor_veiculo) === "string" ? cor_veiculo : false;
        const portasVeiculo = portas_veiculo !== null && portas_veiculo > 0 && typeof(portas_veiculo) === "number" ? portas_veiculo : false;
        const combustivelVeiculo = combustivel_veiculo !== null && combustivel_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(combustivel_veiculo) === "string" ? combustivel_veiculo : false;
        const categoriaVeiculo = categoria_veiculo !== null && categoria_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(categoria_veiculo) === "string" ? categoria_veiculo : false;
        const cambioVeiculo = cambio_veiculo !== null && cambio_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(cambio_veiculo) === "string" ? cambio_veiculo : false;
        const kilometragemVeiculo = kilometragem_veiculo !== null && kilometragem_veiculo >= 0 && typeof(kilometragem_veiculo) === "number" ? kilometragem_veiculo : false;
        const anoVeiculo = ano_veiculo !== null && ano_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(ano_veiculo) === "string" ? ano_veiculo : false;
        const imagemVeiculo = imagem_veiculo !== null && imagem_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(imagem_veiculo) === "string" ? imagem_veiculo : false;
        
        if (
            modeloVeiculo !== false &&
            descricaoVeiculo !== false &&
            valorVeiculo !== false &&
            corVeiculo !== false &&
            portasVeiculo !== false &&
            combustivelVeiculo !== false &&
            categoriaVeiculo !== false &&
            cambioVeiculo !== false &&
            kilometragemVeiculo !== false &&
            anoVeiculo !== false &&
            imagemVeiculo !== false
        ) {
            return `
                "${modeloVeiculo}", 
                "${descricaoVeiculo}", 
                "${valorVeiculo}", 
                "${corVeiculo}", 
                ${portasVeiculo}, 
                "${combustivelVeiculo}", 
                "${categoriaVeiculo}", 
                "${cambioVeiculo}", 
                ${kilometragemVeiculo}, 
                "${anoVeiculo}", 
                "${imagemVeiculo}"`
        }
    };

    validacao_update = (request: any) => {
        const { 
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
        } = request.body;
        
        const modeloVeiculo = modelo_veiculo !== null && modelo_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(modelo_veiculo) === "string" ? modelo_veiculo : false;
        const descricaoVeiculo = descricao_veiculo !== null && descricao_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(descricao_veiculo) === "string" ? descricao_veiculo : false;
        const valorVeiculo = valor_veiculo !== null && valor_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(valor_veiculo) === "string" ? valor_veiculo : false;
        const corVeiculo = cor_veiculo !== null && cor_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(cor_veiculo) === "string" ? cor_veiculo : false;
        const portasVeiculo = portas_veiculo !== null && portas_veiculo > 0 && typeof(portas_veiculo) === "number" ? portas_veiculo : false;
        const combustivelVeiculo = combustivel_veiculo !== null && combustivel_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(combustivel_veiculo) === "string" ? combustivel_veiculo : false;
        const categoriaVeiculo = categoria_veiculo !== null && categoria_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(categoria_veiculo) === "string" ? categoria_veiculo : false;
        const cambioVeiculo = cambio_veiculo !== null && cambio_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(cambio_veiculo) === "string" ? cambio_veiculo : false;
        const kilometragemVeiculo = kilometragem_veiculo !== null && kilometragem_veiculo >= 0 && typeof(kilometragem_veiculo) === "number" ? kilometragem_veiculo : false;
        const anoVeiculo = ano_veiculo !== null && ano_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(ano_veiculo) === "string" ? ano_veiculo : false;
        const imagemVeiculo = imagem_veiculo !== null && imagem_veiculo.length > 0 && modelo_veiculo.length <= 255 && typeof(imagem_veiculo) === "string" ? imagem_veiculo : false;
        
        if (
            modeloVeiculo !== false &&
            descricaoVeiculo !== false &&
            valorVeiculo !== false &&
            corVeiculo !== false &&
            portasVeiculo !== false &&
            combustivelVeiculo !== false &&
            categoriaVeiculo !== false &&
            cambioVeiculo !== false &&
            kilometragemVeiculo !== false &&
            anoVeiculo !== false &&
            imagemVeiculo !== false
        ) {
            return `
            modelo_veiculo = "${modeloVeiculo}", 
            descricao_veiculo = "${descricaoVeiculo}", 
            valor_veiculo = "${valorVeiculo}", 
            cor_veiculo = "${corVeiculo}", 
            portas_veiculo = ${portasVeiculo}, 
            combustivel_veiculo = "${combustivelVeiculo}", 
            categoria_veiculo = "${categoriaVeiculo}", 
            cambio_veiculo = "${cambioVeiculo}", 
            kilometragem_veiculo = ${kilometragemVeiculo}, 
            ano_veiculo = "${anoVeiculo}", 
            imagem_veiculo = "${imagemVeiculo}"`
        }
    };
}

export {ValidacaoBody}