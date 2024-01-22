const { test, expect } = require('@playwright/test');
const { Autenticacao } = require('../support/pages/Autenticacao/index');
const { Loja } = require('../support/pages/Loja/index');


test('Escrever a avaliação de um produto', async ({ page }) => {

    //Dado que o cliente deseja realizar a avaliação de um produto
    let autenticacao = new Autenticacao(page);
    await autenticacao.visitarMyStore();
    await autenticacao.irParaPaginaDeLogin();

    const email = 'giulianni@yopmail.com',
        senha = '123456';

    await autenticacao.inserirEmail(email);
    await autenticacao.informarSenha(senha);
    await autenticacao.clicarEmEntrar();
    
    //Quando o produto a ser avaliado for acessado
    let loja = new Loja(page);

    const blusa = 'Blouse';

    await loja.realizarBusca(blusa);
    await loja.abrirOProdutoBlusa();

    //Então a avaliação poderá ser adicionada com sucesso
    const titulo = 'Blusa bonita, mas peca na qualidade do tecido',
        comentario = 'Gostei muito do modelo da blusa, mas achei que o tecido muito fino o que deixa a roupa um pouco transparente';
    await loja.escreverUmaAvaliacao();
    await loja.adicionarTituloAAvaliacao(titulo);
    await loja.adicionarComentarioAAvaliacao(comentario);
    await loja.enviarAvaliacao();
    await loja.confirmarSeAvaliacaoFoiAdicionada();

});